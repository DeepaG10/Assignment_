import React, { useState } from "react";
import "./UserAccordion.css";

const UserAccordion = ({ user, onDeleteUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const toggleAccordion = () => {
    if (!isEditMode) {
      setIsOpen(!isOpen);
    }
  };

  const enterEditMode = () => {
    setIsEditMode(true);
  };

  const cancelEdit = () => {
    setIsEditMode(false);
    setEditedUser({ ...user });
  };

  const saveEdit = () => {
    user.first = editedUser.first;
    user.last = editedUser.last;
    user.dob = editedUser.dob;
    user.gender = editedUser.gender;
    user.email = editedUser.email;
    user.picture = editedUser.picture;
    user.country = editedUser.country;
    user.description = editedUser.description;

    setIsEditMode(false);
    setIsSaveEnabled(false);
  };

  const deleteConfirm = () => {
    const confirmDelete = window.confirm(
      "Do you really want to delete this user?"
    );

    if (confirmDelete) {
      console.log(`User ${user.first} ${user.last} deleted.`);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedUser((prevUser) => ({ ...prevUser, [field]: value }));

    setIsSaveEnabled(true);
  };

  return (
    <div
      className={`user-accordion ${isOpen ? "open" : "collapsed"} ${
        isEditMode ? "edit-mode" : ""
      }`}
    >
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{`${editedUser.first} ${editedUser.last}`}</h3>
        {!isEditMode && (
          <span
            className={`accordion-icon ${isOpen ? "up-arrow" : "down-arrow"}`}
          >
            &#x2304;
          </span>
        )}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <img src={editedUser.picture} alt={editedUser.first} />
          {!isEditMode && (
            <div>
              <p>{`Age: ${calculateAge(editedUser.dob)}`}</p>
              <p>{`Country: ${editedUser.country}`}</p>
              <p>{`Gender: ${editedUser.gender}`}</p>
              <p>{`Description: ${editedUser.description}`}</p>
            </div>
          )}
          {!isEditMode && (
            <div className="edit-delete-buttons">
              <span className="delete-icon" onClick={deleteConfirm}>
                🗑
              </span>
              <span className="edit-icon" onClick={enterEditMode}>
                ✎
              </span>
            </div>
          )}
          {isEditMode && (
            <div className="edit-mode-content">
              <label>
                First Name:
                <input
                  type="text"
                  value={editedUser.first}
                  onChange={(e) => handleInputChange("first", e.target.value)}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={editedUser.last}
                  onChange={(e) => handleInputChange("last", e.target.value)}
                />
              </label>
              <label>
                Gender:
                <select
                  value={editedUser.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label>
                Country:
                <input
                  type="text"
                  value={editedUser.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                />
              </label>
              <label>
                Description:
                <textarea
                  className="height"
                  value={editedUser.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                ></textarea>
              </label>
              {/* Implement other fields for editing */}
              {/* Implement necessary validations */}

              <div className="position">
                <span className="close-icon" onClick={cancelEdit}>
                  ✕
                </span>
                <span className="check-icon" onClick={saveEdit}>
                  ✔
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAccordion;

// Function to calculate age based on date of birth
const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  return age;
};

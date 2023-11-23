import React, { useState } from "react";
import UserAccordion from "./UserAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const CelebrityList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(
    (user) =>
      user.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search user"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredData.map((user) => (
        <UserAccordion key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CelebrityList;

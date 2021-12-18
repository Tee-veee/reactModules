import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question-card">
      <div className="question-card-head">
        <h1>{title}</h1>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <FaChevronUp className="toggle-icon" />
          ) : (
            <FaChevronDown className="toggle-icon" />
          )}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Question;

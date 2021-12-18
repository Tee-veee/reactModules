import React, { useState, useEffect } from "react";
import people from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const nextPerson = () => {
    let currentIndex = index;
    let peopleLen = people.length - 1;
    if (currentIndex === peopleLen) {
      currentIndex = 0;
      return setIndex(currentIndex);
    }
    currentIndex++;
    return setIndex(currentIndex);
  };

  const prevPerson = () => {
    let currentIndex = index;
    let peopleLen = people.length - 1;

    if (currentIndex === 0) {
      currentIndex = peopleLen;
      return setIndex(currentIndex);
    }
    currentIndex--;
    return setIndex(currentIndex);
  };

  return (
    <article className="card-review">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-img" />
        <FaQuoteRight className="img-icon" />
      </div>
      <div className="text-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
      </div>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft className="chevron-icon" onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight className="chevron-icon" onClick={nextPerson} />
        </button>
      </div>
    </article>
  );
};

export default Review;

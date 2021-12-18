import React from "react";
import Tour from "./tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="main-container">
        <div className="title">
          <h2>Our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return (
              <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;

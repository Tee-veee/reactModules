import Data from "./data";
import React, { useState } from "react";
import { FaBatteryFull, FaMoon } from "react-icons/fa";

import "./App.css";

function App() {
  const [jobs] = useState(Data);
  const [value, setValue] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { company, dates, duties, title } = jobs[value];

  return (
    <main className={`main-container ${isDarkMode && "main-container-dark"}`}>
      <section className="card-container">
        <header className={`card-header ${isDarkMode && "card-header-dark"}`}>
          <h2>Example resume</h2>
          <FaMoon
            className={`dark-icon ${isDarkMode && "dark-icon-dark"}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        </header>
        <div className={`card-content ${isDarkMode && "card-content-dark"}`}>
          <div className="card-content-left">
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`list-btn ${index === value && "active-btn"} ${
                    isDarkMode && "dark-btn"
                  }`}
                >
                  {job.title}
                </button>
              );
            })}
          </div>
          <div className="card-content-right">
            <article
              className={`job-information ${
                isDarkMode && "job-information-dark"
              }`}
            >
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-duties">
                    <FaBatteryFull className="job-icon"></FaBatteryFull>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

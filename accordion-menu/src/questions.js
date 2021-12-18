import React from "react";
import Question from "./question";

const Questions = ({ questions }) => {
  return (
    <main className="main-container">
      <section className="card-container">
        <header className="card-header">
          <h3>Frequently asked questions</h3>
        </header>
        <div className="card-content">
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </div>
      </section>
    </main>
  );
};

export default Questions;

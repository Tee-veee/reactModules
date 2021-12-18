import "./App.css";
import React, { useState } from "react";
import data from "./data";
import Questions from "./questions";

function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return <Questions questions={questions} />;
}

export default App;

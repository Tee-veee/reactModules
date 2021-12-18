import "./App.css";
import Review from "./review";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [primaryCol, setPrimaryCol] = useState("rgb(98, 174, 255)");
  const [secondaryCol, setSecondaryCol] = useState("white");
  const [textCol, setTextCol] = useState("black");

  const checkDark = () => {
    if (isDarkMode) {
      setPrimaryCol("rgb(98, 174, 255)");
      setSecondaryCol("white");
      setTextCol("black");
      return setDarkMode(false);
    }
    setPrimaryCol("black");
    setSecondaryCol("gray");
    setTextCol("white");
    return setDarkMode(true);
  };

  return (
    <main>
      <div className="main-container" style={{ backgroundColor: secondaryCol }}>
        <section className="card">
          <div
            className="card-header"
            style={{ backgroundColor: primaryCol, color: textCol }}
          >
            <FaMoon className="darkmode-icon" onClick={checkDark} />
            <h2>See what people say!</h2>
            <div className="underline"></div>
          </div>
          <Review isDark={isDarkMode} />
        </section>
      </div>
    </main>
  );
}

export default App;

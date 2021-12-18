import React, { useState, useEffect } from "react";

export const SingleColor = ({ rgb, index, type, hex }) => {
  const [alert, setAlert] = useState(true);
  const rgbJoin = rgb.join(",");
  const rgbSpaces = rgb.join(" ");
  const hashHex = "#" + hex;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className="color-div"
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hashHex);
      }}
      style={{ backgroundColor: `rgb(${rgbJoin})` }}
    >
      <div className="color-text">
        <h2>{type === "base" ? "Base" : null}</h2>
        <h4>{rgbSpaces}</h4>
        {alert && <p className="alert">Copied to clipboard</p>}
      </div>
    </div>
  );
};

export default SingleColor;

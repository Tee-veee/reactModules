import "./App.css";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "./data";
import Gallery from "./gallery";

function App() {
  const [photos] = useState(data);
  const [photosValue, setPhotosValue] = useState(0);

  const currentPhoto = photos[photosValue];
  const arrLen = photos.length - 1;

  const photoIndexRight = () => {
    let photosValueCopy = photosValue;
    if (photosValueCopy === arrLen) {
      setPhotosValue(0);
      return;
    }
    const newPhotosValue = photosValueCopy + 1;
    setPhotosValue(newPhotosValue);
    return;
  };
  const photoIndexLeft = () => {
    let photosValueCopy = photosValue;
    if (photosValueCopy === 0) {
      setPhotosValue(arrLen);
      return;
    }
    const newPhotosValue = photosValueCopy - 1;
    setPhotosValue(newPhotosValue);
    return;
  };

  return (
    <main className="main-container">
      <div className="card-container">
        <FaArrowLeft className="arrow-icon" onClick={() => photoIndexLeft()} />

        <div className="img-div">
          <Gallery photos={currentPhoto} />
        </div>
        <FaArrowRight
          className="arrow-icon"
          onClick={() => photoIndexRight()}
        />
      </div>
    </main>
  );
}

export default App;

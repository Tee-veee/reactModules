import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

function Gallery({ photos }) {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const { id, img } = photos;

  const selectImg = (img) => {
    setTempImg(img);
    setModal(true);
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (modal) return setModal(false);
      return;
    }
  });

  return (
    <>
      <section className={modal ? "modal open" : "modal"}>
        <FaWindowClose
          className="close-icon"
          onClick={() => setModal(false)}
          onKeyDown={() => {
            console.log(123);
          }}
        />
        <img src={tempImg} alt="random-img" />
      </section>

      <img
        className="image"
        id={id}
        src={img}
        alt="random-img"
        onClick={() => selectImg(img)}
      />
    </>
  );
}
export default Gallery;

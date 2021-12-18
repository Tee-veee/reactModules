import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal-overlay" : "modal-overlay"
      } `}
    >
      <div className="modal-container">
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;

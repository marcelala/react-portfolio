// npm packages
import React from "react";
import ReactDom from "react-dom";
// project files
import closeIcon from "../assets/img/icons/close.svg";

// Exceleent use of portal
export default function Modal({ children, handleClose, active }) {
  if (!active) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        {/* I think this should be on the children not the parent */}
        {/* because what happen if I have a nice primary button with the text close */}
        {/* then the small X on the corner is unnecesary */}
        <button onClick={handleClose} className="btn-close">
          <img src={closeIcon} alt="x" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

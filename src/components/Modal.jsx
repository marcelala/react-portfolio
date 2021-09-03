// npm packages
import React from "react";
import ReactDom from "react-dom";
//project files
import closeIcon from "../assets/img/icons/close.svg";

export default function Modal({ children, handleClose, active }) {
	if (!active) return null;
	return ReactDom.createPortal(
		<>
			<div className="modal-overlay" />
			<div className= "modal-container">
				<button onClick={handleClose} className="btn-close">
					<img src={closeIcon} alt="x"/>
				</button>
				{children}
			</div>
		</>,
		document.getElementById("portal")
	);
}

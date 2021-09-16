// npm packages
import React from "react";
import ReactDom from "react-dom";

export default function Modal({ modal }) {
	//safeguard
	if (modal===null) return null;

	return ReactDom.createPortal(
		<>
			<div className="modal-overlay" />
			<div className="modal-container">
				{modal}
			</div>
		</>,
		document.getElementById("portal")
	);
}

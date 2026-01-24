import type { ReactNode } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

type ModalProps = {
	open: boolean;
	children: ReactNode;
};

export function Modal({ children, open }: ModalProps) {

	if (!open) return null;

	const portal = document.getElementById("portal");
	if (!portal) return null;

	return ReactDom.createPortal(
		<>
			<div className="overlay"></div>
			<div className="modal">
				{children}
			</div>
		</>
		,
		portal,
		"modal"
	);
}
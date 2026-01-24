import "./CloseIcon.css";

export function CloseIcon({ handleClick }: { handleClick: () => void; }) {
	return (
		<img className="close-icon" src={"/close.svg"} onClick={handleClick} />
	);
}

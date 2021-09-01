const Button = ({ handleClick, children }) => {
	return (
		<button type="button" onClick={handleClick}>
			{children}
		</button>
	);
};

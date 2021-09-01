//npm packages
import PropTypes from "prop-types";
function TitleAndDescription({ props }) {
	return (
		<div className="text-container">
			<h2> {props.title} </h2>
			<p> {props.description} </p>
		</div>
	);
}
TitleAndDescription.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default TitleAndDescription;

//npm packages
import PropTypes from "prop-types";
function TitleAndDescription({ title, description }) {
	return (
		<div className="text-container">
			<h2> {title} </h2>
			<p> {description} </p>
		</div>
	);
}
TitleAndDescription.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default TitleAndDescription;

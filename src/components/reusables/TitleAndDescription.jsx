//npm packages
import PropTypes from "prop-types";
function TitleAndDescription({ text }) {
	return (
		<div className="section-text">
			<h2> {text.title} </h2>
			<p> {text.description} </p>
		</div>
	);
}
TitleAndDescription.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	text: PropTypes.object,
};

export default TitleAndDescription;

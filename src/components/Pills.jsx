// npm packages
import React from "react";
import PropTypes from "prop-types";

// I think is better to have a Pill component and then having a List component to render them (This does not add or remove points)
export default function Pills({ data }) {
  const pillList = data.map((tech) => {
    return (
      <span>
        <li className="pill-container">{tech}</li>
      </span>
    );
  });
  return <ul className="pills">{pillList}</ul>;
}

Pills.propTypes = {
  data: PropTypes.array,
  tech: PropTypes.string,
};

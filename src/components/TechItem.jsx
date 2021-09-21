// npm packages
import React from "react";
import PropTypes from "prop-types";

export default function TechItem({ item }) {
    const imageObject = require(`../assets/img/icons/${item.icon}`);
    const imageURL = imageObject.default;
    return (
        <li className="techItem">
            <label htmlFor="icon-name" className="icon-name">
                <img
                    src={imageURL}
                    className="tech-icon"
                    alt={"icon of" + item.name}
                />
                <span className="label"><p className="smaller"> {item.label} </p> </span>
            </label>
        </li>
    );
}
TechItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    itemType: PropTypes.string,
    name: PropTypes.string,
};
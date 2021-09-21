// npm packages
import React from "react";
import PropTypes from "prop-types";

export default function ContactItem({ item }) {
    const imageObject = require(`../assets/img/icons/${item.icon}`);
    const imageURL = imageObject.default;
    return (
        <li className="contact-item">
            <label htmlFor="icon-name" className="icon-name">
                <img
                    src={imageURL}
                    className="contact-icon"
                    alt={"icon of" + item.name}
                />
                <span className="label"><p className="smaller"> {item.label} </p> </span>
            </label>
        </li>
    );
}
ContactItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    itemType: PropTypes.string,
    name: PropTypes.string,
};
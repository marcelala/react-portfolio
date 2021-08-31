import React from 'react'

export default function Item({ fileName}) {
        const imageObject = require(`../assets/icons/${fileName}`);
		const imageURL = imageObject.default;
    return (
        <div>

        </div>
    )
}

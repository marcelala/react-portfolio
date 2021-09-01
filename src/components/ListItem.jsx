import React from 'react'

export default function ListItem({children}) {
        //const imageObject = require(`../assets/icons/${fileName}`);
		//const imageURL = imageObject.default;
    return (
        <div className= "ListItem">
            {children}
        </div>
    )
}

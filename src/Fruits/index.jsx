import React from "react";

function Fruits({ fName = "", price = Number }) {
    return (
        <div>
            <span>{fName}</span>
            <span>{price}</span>
        </div>
    )
}

export default Fruits
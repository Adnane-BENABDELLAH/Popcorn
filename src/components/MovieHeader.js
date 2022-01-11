import React from "react";

const MovieHeader = (props) => {
    return (
        <div className='col' id="fav">
            <h1>{props.header}</h1>
        </div>
    )
}
export default MovieHeader;
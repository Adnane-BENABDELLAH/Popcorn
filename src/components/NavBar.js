import React from "react";

const NavBar = (props) => {
    return (
        <>
            <h1><a href="" className="log">{props.logo}</a></h1>
            <h1><a href="#fav" className="favour">{props.fav}</a></h1>
        </>
    )
}
export default NavBar;
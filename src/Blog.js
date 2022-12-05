import React from "react";
import { Link } from "react-router-dom";

const Blog =()=> {
    return <div>
        <p>This is the text for the blog page</p>
        <Link to="/home" className="App-link">Home</Link>
    </div>
}

export { Blog }
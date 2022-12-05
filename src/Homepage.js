import React from "react";
import logo from './logo.svg';
import { Link } from "react-router-dom";

const Homepage =()=> {
        return <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            This is the homepage. More may be added here later.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by React
            </a>
            <br/>
            <Link to="/blog" className="App-link">Visit the blog page!</Link>
        </div>
}

export { Homepage }
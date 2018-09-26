import React from 'react';
import {Link} from "react-router-dom"

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <Link to="/"> <a className="navbar-brand" href="#">CommunityBio</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                   <Link to="/posts"className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <Link to="/posts/new" className="nav-link" >New Post</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
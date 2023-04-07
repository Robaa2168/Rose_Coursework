import { Link } from 'react-router-dom';
import React from 'react';

const About = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <Link className="btn btn-outline-light mx-2" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light mx-2" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light mx-2" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default About;

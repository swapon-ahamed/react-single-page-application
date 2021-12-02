import React from 'react';
import ReactDOM from 'react-dom';

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Notes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href='#'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/bio">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/post/123">Add Note</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span id="footer-text">MLB Clicky Game &copy; 2020<i id="react" className="fab fa-react"></i></span>
                </div>
            </footer>

        )
    }
}

export default Footer;
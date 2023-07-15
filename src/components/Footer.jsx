import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-2">
        <div className="row ">
            <Link to="/" className="col-3 text-center active">
                <span className="material-symbols-outlined">
                    menu_book
                    </span>
                    <p>Study</p>
            </Link>
            <Link to="/login" className="col-3 text-center">
                <span className="material-symbols-outlined">
                    thumb_up
                    </span>
                    <p>Login</p>
            </Link>
            <Link to="/exam" className="col-3 text-center">
                <span className="material-symbols-outlined">
                    schedule
                    </span>
                    <p>Exam</p>
            </Link>
            <Link to="/profile" className="col-3 text-center">
                <span className="material-symbols-outlined">
                    person
                    </span>
                    <p>User</p>
            </Link>
        </div>
    </footer>
    );
}

export default Footer;

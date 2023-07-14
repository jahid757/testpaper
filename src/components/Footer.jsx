import React from 'react';

const Footer = () => {
    return (
        <footer className="p-2">
        <div className="row ">
            <a href="/" className="col-3 text-center active">
                <span className="material-symbols-outlined">
                    menu_book
                    </span>
                    <p>Study</p>
            </a>
            <a href="/login" className="col-3 text-center">
                <span className="material-symbols-outlined">
                    thumb_up
                    </span>
                    <p>Login</p>
            </a>
            <a href="/exam" className="col-3 text-center">
                <span className="material-symbols-outlined">
                    schedule
                    </span>
                    <p>Exam</p>
            </a>
            <a href="register" className="col-3 text-center">
                <span className="material-symbols-outlined">
                    person
                    </span>
                    <p>Register</p>
            </a>
        </div>
    </footer>
    );
}

export default Footer;

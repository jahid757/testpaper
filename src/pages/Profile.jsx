import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import user from '../images/user.jpg'

const Profile = () => {
    return (
        <Container>
            <div className="container h-100">
            <div className="profile_details card mb-3 shadow">
                <div className="d-flex align-items-center gap-2 ">
                    
                        <img className="w-30 m-2 border border-primary rounded " src={user} alt="user"/>
                    
                    <div>
                        <h4><strong>John Smith</strong></h4>
                        <p className="mb-0">0173939482</p>
                        <p className="mb-0">Male</p>
                        <p className="mb-0">Banker</p>
                    </div>
                </div>
            </div>

            <div className="card mb-3 shadow">

                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                

            </div>
            <div className="card mb-3 shadow">
            <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>

            </div>

            <div className="card mb-3 shadow">

            <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                

                <div className="toggler mb-0 border-bottom pt-0 px-2">
                    <Link to={'/'} className="d-flex align-items-center justify-content-between pointer-event text-danger">
                        <h4 className="h5">Logout</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>

            </div>

        </div>
        </Container>
    );
}

export default Profile;

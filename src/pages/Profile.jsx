import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import user from '../images/user.jpg'
import { getUserData } from '../components/Call_API';

const Profile = () => {
    const [userData,setUserData] = useState({})

  const loadSubject = async () => {
    const userKey = localStorage.getItem("key");
    if(typeof userKey === 'string' && userKey !== 'undefined'){
      const sub = await getUserData(userKey);
      setUserData(sub)
    }
  };
  useEffect(()=>{loadSubject()},[])
    return (
        <Container>
            <div className="container h-100">
            <div className="profile_details card mb-3 shadow">
                <div className="d-flex align-items-center gap-2 ">
                    
                        <img className="w-30 m-2 border border-primary rounded " src={user} alt="user"/>
                    
                    <div>
                        <h4><strong>{userData.name}</strong></h4>
                        <p className="mb-0">{userData.mobile}</p>
                        <p className="mb-0 capitalize">{userData.gender}</p>
                        <p className="mb-0">Class {userData.classname_id}</p>
                    </div>
                </div>
            </div>

            <div className="card mb-3 shadow">

                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/profile-update' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your info</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/change-password' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change Password</h4>
                        <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pt-2 px-2">
                    <Link to='/change-mobile' className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change Mobile</h4>
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

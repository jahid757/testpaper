
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Exam from './pages/Exam';
import Ans from './pages/Ans';
import Chapter from './pages/Chapter';
import Error404 from './pages/404';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import { fetchUserData } from './components/Call_API';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';
import PasswordEdit from './pages/PasswordEdit';
import MobileUpdate from './pages/MobileUpdate';
import ResetPassword from './pages/ResetPassword';
export const UserContext = createContext();
function App() {
  // const user = {
  //   name:'abcd',
  // }
  const [user,setUser] = useState(false);

  const loginByAuth = async () => {
    const userKey = localStorage.getItem("key");
    if(typeof userKey === 'string' && userKey !== 'undefined'){
      const userData = await fetchUserData(userKey);
      setUser(userData)
    }
  };

  useEffect(()=>{loginByAuth()},[])

  return (
    <UserContext.Provider value={[user, setUser]}>
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={<Login/>}/>
        <Route  path='/Register' element={<Register/>}/>
        <Route path='/404' element={<Error404/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>


        <Route element={<PrivateRoute user={user} />}>
        <Route  index path='/' element={<Home/>}/>
        <Route path='/exam' element={<Exam/>}/>
        <Route path='/ans' element={<Ans/>}/>
        <Route path='/chapter' element={<Chapter/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/profile-update' element={<ProfileEdit/>}/>
        <Route path='/change-password' element={<PasswordEdit/>}/>
        <Route path='/change-mobile' element={<MobileUpdate/>}/>

        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

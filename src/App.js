
import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  index path='/' element={<Home/>}/>
        <Route path='/exam' element={<Exam/>}/>
        <Route path='/ans' element={<Ans/>}/>
        <Route path='/chapter' element={<Chapter/>}/>
        <Route path='/404' element={<Error404/>}/>
        <Route path='/profile' element={<Profile/>}/>


        <Route  path='/login' element={<Login/>}/>
        <Route  path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import img from "../images/1.jpg";
import { Link } from "react-router-dom";
import { getAllSubject } from "../components/Call_API";

const Home = () => {
const [subject,setSubject] = useState([])

  const loadSubject = async () => {
    const userKey = localStorage.getItem("key");
    if(typeof userKey === 'string' && userKey !== 'undefined'){
      const sub = await getAllSubject(userKey);
      setSubject(sub)
    }
  };
  useEffect(()=>{loadSubject()},[])

  return (
    <Container>
      <div className="container h-100">
        <div className="d-flex flex-wrap justify-content-between card-design-3">

        {
          subject.map((data) => {
            return (
              <Link key={data.id} to="/chapter" className="card p-2 text-center book">
            <img src={img} alt="img" />
            <h5>{data.subject_name}</h5>
            <p>{data.class_data.class_name}</p>
            <p>{data.department_data.department_name}</p>
          </Link>
            )
          })
        }
        
        </div>
      </div>
    </Container>
  );
};

export default Home;

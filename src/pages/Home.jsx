import React from "react";
import Container from "../components/Container";
import img from "../images/1.jpg";

const Home = () => {
  return (
    <Container>
      <div className="container h-100">
        <div className="d-flex flex-wrap justify-content-between card-design-3">
          <a href="/chapter.html" className="card p-2 text-center book">
            <img src={img} alt="img" />
            <h5>Math</h5>
            <p>5th</p>
            <p>Science</p>
          </a>

          <a href="/chapter.html" className="card p-2 text-center book">
            <img src={img} alt="img" />
            <h5>Math</h5>
            <p>5th</p>
            <p>Science</p>
          </a>

          <a href="/chapter.html" className="card p-2 text-center book">
            <img src={img} alt="img" />
            <h5>Math</h5>
            <p>5th</p>
            <p>Science</p>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Home;

import React from "react";
import Container from "../components/Container";
import FaqCard from "./FaqCard";

const Ans = () => {
  return (
    <Container>
      <div className="h-100">
        <div className=" bg-white py-2">
          <div className="faq p-2 text-active">
            <h4 className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              tempore.
            </h4>
            <p className="text-red-50">
              Science{">"}Math{">"}Alphabet
            </p>
            <p className="mb-2 text-secondary">
              <small>Read 12</small>
            </p>

            <h4 className="text-dark mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              mollitia exercitationem, expedita esse eius eligendi, deserunt
              libero autem dolor est dolorum natus doloribus unde harum?
            </h4>

            <div className="d-flex align-items-center justify-content-between text-dark">
              <p>Important: 0</p>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="material-symbols-outlined">light_mode</span>
                <span className="material-symbols-outlined">thumb_up</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <p className="text-center">Exam</p>
          <button className="btn btn-primary mb-2">Read More</button>
          <p>Explain More</p>
        </div>
        <div className="faq-list bg-white py-2">
          {
            <>
              <FaqCard />
              <FaqCard />
              <FaqCard />
            </>
          }
        </div>
      </div>
    </Container>
  );
};

export default Ans;

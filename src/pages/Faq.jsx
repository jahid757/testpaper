import React from 'react';
import FaqCard from './FaqCard';
import Container from '../components/Container';

const Faq = () => {
    return (
        <Container>
           <div className="h-100">
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
}

export default Faq;

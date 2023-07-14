import React from 'react';
import Container from '../components/Container';

const Chapter = () => {
    return (
        <Container>
             <div className="container h-100">
            <div className="d-flex flex-wrap justify-content-between gap-1 chapter-wrap">

                <a href="/faq.html" className="card p-2 pb-3 w-50  chapter">
                    <div className="d-flex justify-content-end">
                        <span className="material-symbols-outlined star">
                            star
                            </span>
                    </div>
                    <span className="material-symbols-outlined">
                        menu_book
                        </span>
                    <h5>Math</h5>
                    <p>Net Answerer: 2</p>
                </a>

                <a href="/faq.html" className="card pb-3 p-2 w-50  chapter">
                    <div className="d-flex justify-content-end">
                        <span className="material-symbols-outlined star">
                            star
                            </span>
                    </div>
                    <span className="material-symbols-outlined">
                        menu_book
                        </span>
                    <h5>Science</h5>
                    <p>Net Answerer: 2</p>
                </a>
                <a href="/faq.html" className="card pb-3 p-2 w-50  chapter">
                    <div className="d-flex justify-content-end">
                        <span className="material-symbols-outlined star">
                            star
                            </span>
                    </div>
                    <span className="material-symbols-outlined">
                        menu_book
                        </span>
                    <h5>Science</h5>
                    <p>Net Answerer: 2</p>
                </a>
    
    
            </div>
        </div>
        </Container>
    );
}

export default Chapter;

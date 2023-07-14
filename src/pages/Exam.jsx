import React from 'react';
import Container from '../components/Container';
import illus from '../images/ilus.jpg'
const Exam = () => {
    return (
        <Container>
            <div className="container h-100">
            <div className="exam">

                <a href="/card-1.html" className="card p-2 text-center book">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <img src={illus} alt="images"/>
                            <div>
                                <h5 style={{marginLeft: "-25px"}}>Exam Title</h5>
                                <p>All Question <strong className="text-success">163</strong></p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <div>
                                    <svg viewBox="0 0 36 36" className="circular-chart green">
                                      <path className="circle-bg"
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <path className="circle"
                                        strokeDasharray="30, 100"
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <text x="18" y="20.35" className="percentage">30%</text>
                                    </svg>
                                  <p>Read 30</p>
                            </div>

                            <span className="material-symbols-outlined fon-40">
                                chevron_right
                                </span>

                        </div>
                    </div>
                </a>

                <a href="/card-1.html" className="card p-2 text-center book">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <img src={illus} alt="images"/>
                            <div>
                                <h5 style={{marginLeft: "-25px"}}>Exam Title</h5>
                                <p>All Question <strong className="text-success">163</strong></p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <div>
                                    <svg viewBox="0 0 36 36" className="circular-chart green">
                                      <path className="circle-bg"
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <path className="circle"
                                        strokeDasharray="30, 100"
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <text x="18" y="20.35" className="percentage">30%</text>
                                    </svg>
                                  <p>Read 30</p>
                            </div>

                            <span className="material-symbols-outlined fon-40">
                                chevron_right
                                </span>

                        </div>
                    </div>
                </a>

                <a href="/card-1.html" className="card p-2 text-center book">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <img src={illus} alt="images"/>
                            <div>
                                <h5 style={{marginLeft:" -25px"}}>Exam Title</h5>
                                <p>All Question <strong className="text-success">163</strong></p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <div>
                                    <svg viewBox="0 0 36 36" className="circular-chart green">
                                      <path className="circle-bg"
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <path className="circle"
                                        strokeDasharray="30, 100"
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <text x="18" y="20.35" className="percentage">30%</text>
                                    </svg>
                                  <p>Read 30</p>
                            </div>

                            <span className="material-symbols-outlined fon-40">
                                chevron_right
                                </span>

                        </div>
                    </div>
                </a>

                
    
                
    
            </div>
        </div>
        </Container>
    );
}

export default Exam;

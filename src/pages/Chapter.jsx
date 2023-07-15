import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { getAllChapter } from '../components/Call_API';

const Chapter = () => {
    const [chapter,setChapter] = useState([])

  const loadChapter = async () => {
    const userKey = localStorage.getItem("key");
    if(typeof userKey === 'string' && userKey !== 'undefined'){
      const sub = await getAllChapter(userKey);
      setChapter(sub)
    }
  };
  useEffect(()=>{loadChapter()},[])

    return (
        <Container>
             <div className="container h-100">
            <div className="d-flex flex-wrap justify-content-between gap-1 chapter-wrap">

                {
                    chapter.map((data) => {
                        return (
                            <Link key={data.id} to="/faq" className="card p-2 pb-3 w-50  chapter">
                    <div className="d-flex justify-content-end">
                        <span className="material-symbols-outlined star">
                            star
                            </span>
                    </div>
                    <span className="material-symbols-outlined">
                        menu_book
                        </span>
                    <h5>{data.chapter_name}</h5>
                    <p>{data.class_data.class_name}</p>
                </Link>
                        )
                    })
                }

               
    
    
            </div>
        </div>
        </Container>
    );
}

export default Chapter;

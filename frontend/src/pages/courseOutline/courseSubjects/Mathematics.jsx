import React from 'react';
import './courseSubjects.css';
import mathematics from '../courseContents/mathematics.json';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function Mathematics() {
    
    function ScrollToTop() {
        const { pathname } = useLocation();
    
        useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', 
        });
        }, [pathname]);
    
        return null;
    }


    return (

        <div className='courseSubjects-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center', padding:'3rem 5em', width:'100%', background:'gray'}}>

            <div >
                <h1 id='courseSubjects-hd' style={{color:'white'}}>MATHEMATICS</h1> 
                <p style={{color:'white'}}>Here are lists of availaible topics in Mathematics. You can click to learn.</p>
                <br />
            </div>

            <div className='courseSubjects-cont'>
                {
                    mathematics.map((mathematics, index) => (
                        <React.Fragment key={index}>

                            <div className='courseSubjects-detailz'>
                                <h3>{mathematics.topic}</h3>
                            </div>
                        
                        </React.Fragment>
                    ))
                }
                
            </div>

        </div>
    )
}

export default Mathematics;
import React from 'react';
import './courseSubjects.css';
import english from '../courseContents/english.json';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';






function EnglishLanguage() {
    
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
                <h1 id='courseSubjects-hd' style={{color:'white'}}>ENGLISH LANGUAGE</h1> 
                <p style={{color:'black'}}>Here are lists of availaible topics in English Language. You can click to learn.</p>
                <br />
            </div>

            <div className='courseSubjects-cont'>
                {
                    english.map((english, index) => (
                        <React.Fragment key={index}>

                            <div className='courseSubjects-detailz'>
                                <h3>{english.topic}</h3>
                            </div>
                        
                        </React.Fragment>
                    ))
                }
                
            </div>

        </div>
    )

}
export default EnglishLanguage;
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
                <p style={{color:'black'}}>Here are lists of availaible topics in English Language. Click to learn on.</p>
                <br />
            </div>

            <div className='courseSubjects-cont'>
                {
                    english.map((english, index) => (
                        <React.Fragment key={index}>

                            <div className='courseSubjects-detailz'>

                                <h3> <a href=" https://www.toppr.com/guides/english/writing/letter-writing/"  target='_blank' rel='noreferrer'>{english.topicle}</a></h3>

                                <h3> <a href=" https://www.butte.edu/departments/cas/tipsheets/grammar/parts_of_speech.html"  target='_blank' rel='noreferrer'>{english.topicpa}</a></h3>
                                
                                <h3> <a href=" https://en.wikipedia.org/wiki/Reading_comprehension"  target='_blank' rel='noreferrer'>{english.topicco}</a></h3>
                                
                                <h3> <a href=" https://www.britannica.com/art/poetry"  target='_blank' rel='noreferrer'>{english.topicpe}</a></h3>
                                
                                <h3> <a href=" https://www.grammarly.com/blog/figure-of-speech/"  target='_blank' rel='noreferrer'>{english.topicfi}</a></h3>
                                
                                <h3> <a href=" https://www.toppr.com/guides/english/writing/essay/"  target='_blank' rel='noreferrer'>{english.topices}</a></h3>
                                
                                <h3> <a href=" https://www.ef.com/wwen/english-resources/english-idioms/"  target='_blank' rel='noreferrer'>{english.topicid}</a></h3>
                                
                                <h3> <a href=" https://www.studysmarter.co.uk/explanations/english/prosody/intonation/"  target='_blank' rel='noreferrer'>{english.topicve}</a></h3>
                                
                                <h3> <a href=" https://www.dictionary.com/browse/synonym"  target='_blank' rel='noreferrer'>{english.topicsy}</a></h3>
                                
                                <h3> <a href=" https://www.vedantu.com/commerce/article-writing"  target='_blank' rel='noreferrer'>{english.topicar}</a></h3>
                            </div>
                        
                        </React.Fragment>
                    ))
                }
                
            </div>

        </div>
    )

}
export default EnglishLanguage;
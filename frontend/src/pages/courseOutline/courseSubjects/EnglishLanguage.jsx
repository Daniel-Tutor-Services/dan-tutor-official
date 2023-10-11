import './courseSubjects.css';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import english from '../courseContents/english.json';






function EnglishLanguage() {

    const [query, setQuery] = useState("");

    
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

    function goBackAndRefresh() {
        window.history.go(-1);
    }




    return (

        <div className='courseSubjects-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center', padding:'3rem 1.5em',paddingBottom:'100%', width:'100%', background:'#00296f'}}>
            
            <div style={{display:'flex', justifyContent:'start', alignItems:'center', color:'whitesmoke', gap:'1rem'}}>
                <BiArrowBack onClick={goBackAndRefresh} style={{cursor: 'pointer'}} color='white' size={40}/>
                <span>Back</span>
            </div>
            
            <div id='courseSubjects-hd'  >

                <h1 style={{color:'white'}}>ENGLISH LANGUAGE</h1> 
                <p style={{color:'wheat'}}>Here are lists of availaible topics in English Language. Click to learn moree.</p>
                <br />
            </div>




            <div>

                <input placeholder="Search Topic" onChange={event => setQuery(event.target.value)}  style={{width:'40vw',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  className="dashinput" />

                <br />
                <br />

                <div className='courseSubjects-cont'>
                                
                    {
                        english.filter(english => {

                            if (query === '') {
                                return english;
                            } else if (english.topic.trim().toLowerCase().includes(query.toLowerCase())) {
                                return english;
                            }


                        }).map((english, index) => (

                            <div className='courseSubjects-detailz' key={index}>
        
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
                        ))
                    }  

                </div>   

                <div className="nocourse" style={{background:'red',display:'flex', justifyContent:'center', alignItems:'center', transform:'none', borderRadius:'20px', color:'black', width:'42vw', padding:'0.5rem', margin:'0 auto'}}> 

                    <marquee  direction="left">
                        <p style={{display:'flex', justifyContent:'center',padding:'0.3rem', margin:'10px', color:'white'}}>
                            No Other Topic Available
                        </p>
                    </marquee>
                </div>

            </div>


        </div>
    )

}
export default EnglishLanguage;
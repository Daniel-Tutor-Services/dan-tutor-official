import './courseSubjects.css';
import chemistry from '../courseContents/chemistry.json';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';



function Chemistry() {

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




    return (

        <div className='courseSubjects-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center', padding:'3rem 5em', width:'100%', background:'gray'}}>

            <div >
                <h1 id='courseSubjects-hd' style={{color:'white'}}>CHEMISTRY</h1> 
                <p style={{color:'black'}}>Here are lists of availaible topics in Chemistry. Click to learn more.</p>
                <br />
            </div>




            <div>

                <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)}  style={{width:'350px',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  className="dashinput" />

                <div className='courseSubjects-cont'>
                                
                    {
                        chemistry.filter(chemistryz => {

                            if (query === '') {
                                return chemistryz;
                            } else if (chemistryz.topic.toLowerCase().includes(query.toLowerCase())) {
                                return chemistryz;
                            }

                        }).map((chemistry, index) => (

                            <div className='courseSubjects-detailz' key={index}>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicor} </a></h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicin} </a></h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicse}</a> </h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicel}</a> </h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicnu} </a></h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicth} </a></h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicra} </a></h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'> {chemistry.topicph}  </a></h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicsu} </a></h3>

                                <h3>  <a href=" "  target='_blank' rel='noreferrer'>  {chemistry.topicge} </a></h3>

                            </div>
                        ))
                    }

                </div>      
                
            </div>

        </div>
    )
}

export default Chemistry;
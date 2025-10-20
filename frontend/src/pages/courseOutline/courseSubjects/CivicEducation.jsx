import './courseSubjects.css';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import civic from '../courseContents/civic.json';



function CivicEducation() {
    
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

        <div className='courseSubjects-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center', padding:'3rem 1.5em', paddingBottom:'100%',  width:'100%', background:'dodgerblue'}}>
            
            <div style={{display:'flex', justifyContent:'start', alignItems:'center', color:'whitesmoke', gap:'1rem'}}>
                <BiArrowBack onClick={goBackAndRefresh} style={{cursor: 'pointer'}} color='white' size={40}/>
                <span style={{color:'black'}}>Back</span>
            </div>

            <div id='courseSubjects-hd' >
                <h1 style={{color:'black'}}>CIVIC EDUCATION</h1> 
                <p style={{color:'white'}}>Here are lists of availaible topics in Civic Education. Click to learn more.</p>
                <br />
            </div>




            <div>

                <input placeholder="Search Topic" onChange={event => setQuery(event.target.value)}  style={{width:'40vw',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  className="dashinput" />

                <br />
                <br />

                <div className='courseSubjects-cont'>
                                
                    {
                        civic.filter(civicz => {

                            if (query === '') {
                                return civicz;
                            } else if (civicz.topic.toLowerCase().includes(query.toLowerCase())) {
                                return civicz;
                            }

                        }).map((civic, index) => (

                            <div className='courseSubjects-detailz' key={index}>
                                
                                <h3> <a href=" " target='_blank' rel='noreferrer'> {civic.topicpr}</a> </h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {civic.topicmo}</a></h3>

                                <h3> <a href=" " target='_blank' rel='noreferrer'> {civic.topicel}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {civic.topicrad}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {civic.topicra}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {civic.topicth}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {civic.topicme}</a></h3>

                                <h3> <a href="  " target='_blank' rel='noreferrer'> {civic.topicqu}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {civic.topicop}</a></h3>

                                <h3> <a href="  " target='_blank' rel='noreferrer'> {civic.topicnu}</a></h3>

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

export default CivicEducation;
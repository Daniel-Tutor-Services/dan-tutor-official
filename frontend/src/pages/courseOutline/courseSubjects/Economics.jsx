import './courseSubjects.css';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import economics from '../courseContents/economics.json';



function Economics() {
    
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

        <div className='courseSubjects-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center', padding:'3rem 1.5em', paddingBottom:'100%',  width:'100%', background:'#00296f'}}>
            
            <div style={{display:'flex', justifyContent:'start', alignItems:'center', color:'whitesmoke', gap:'1rem'}}>
                <BiArrowBack onClick={goBackAndRefresh} style={{cursor: 'pointer'}} color='white' size={40}/>
                <span>Back</span>
            </div>

            <div id='courseSubjects-hd' >
                <h1 style={{color:'white'}}>ECONOMICS</h1> 
                <p style={{color:'wheat'}}>Here are lists of availaible topics in Economics. Click to learn more.</p>
                <br />
            </div>




            <div>

                <input placeholder="Search Topic" onChange={event => setQuery(event.target.value)}  style={{width:'40vw',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  className="dashinput" />

                <br />
                <br />

                <div className='courseSubjects-cont'>
                                
                    {
                        economics.filter(economicsz => {

                            if (query === '') {
                                return economicsz;
                            } else if (economicsz.topic.toLowerCase().includes(query.toLowerCase())) {
                                return economicsz;
                            }

                        }).map((economics, index) => (

                            <div className='courseSubjects-detailz' key={index}>
                                
                                <h3> <a href=" " target='_blank' rel='noreferrer'> {economics.topicpr}</a> </h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {economics.topicmo}</a></h3>

                                <h3> <a href=" " target='_blank' rel='noreferrer'> {economics.topicel}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {economics.topicrad}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {economics.topicra}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {economics.topicth}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {economics.topicme}</a></h3>

                                <h3> <a href="  " target='_blank' rel='noreferrer'> {economics.topicqu}</a></h3>

                                <h3> <a href=" "  target='_blank' rel='noreferrer'> {economics.topicop}</a></h3>

                                <h3> <a href="  " target='_blank' rel='noreferrer'> {economics.topicnu}</a></h3>

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

export default Economics;
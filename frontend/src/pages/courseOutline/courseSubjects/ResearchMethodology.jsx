import './courseSubjects.css';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import research from '../courseContents/research.json';



function ResearchMethodology() {
    
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

    // LECTURE 1

        function onButtonClick1 () {
    
        // using Java Script method to get PDF file

        fetch('Lecture 1.pdf').then(response => {
            response.blob().then(blob => {
        
                // Creating new object of PDF file
        
                const fileURL = window.URL.createObjectURL(blob);
            
                // Setting various property values

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Lecture 1.pdf';
                alink.click();
             

            })
        })
    }

    // LECTURE 2

    function onButtonClick2 () {
    
        // using Java Script method to get PDF file

        fetch('Lecture 2.pdf').then(response => {
            response.blob().then(blob => {
        
                // Creating new object of PDF file
        
                const fileURL = window.URL.createObjectURL(blob);
            
                // Setting various property values

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Lecture 2.pdf';
                alink.click();
             

            })
        })
    }

    // LECTURE 3

    function onButtonClick3 () {
    
        // using Java Script method to get PDF file

        fetch('Lecture 3.pdf').then(response => {
            response.blob().then(blob => {
        
                // Creating new object of PDF file
        
                const fileURL = window.URL.createObjectURL(blob);
            
                // Setting various property values

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Lecture 3.pdf';
                alink.click();
             

            })
        })
    }


    // LECTURE 4

    function onButtonClick4 () {
    
        // using Java Script method to get PDF file

        fetch('Lecture 4.pdf').then(response => {
            response.blob().then(blob => {
        
                // Creating new object of PDF file
        
                const fileURL = window.URL.createObjectURL(blob);
            
                // Setting various property values

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Lecture 4.pdf';
                alink.click();
             

            })
        })
    }

    // LECTURE 5

    function onButtonClick5 () {
    
        // using Java Script method to get PDF file

        fetch('Lecture 5.pdf').then(response => {
            response.blob().then(blob => {
        
                // Creating new object of PDF file
        
                const fileURL = window.URL.createObjectURL(blob);
            
                // Setting various property values

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Lecture 5.pdf';
                alink.click();
             

            })
        })
    }
  


    return (

        <div className='courseSubjects-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center', padding:'3rem 1.5em', paddingBottom:'100%',  width:'100%', background:'turquoise'}}>
            
            <div style={{display:'flex', justifyContent:'start', alignItems:'center', color:'whitesmoke', gap:'1rem'}}>
                <BiArrowBack onClick={goBackAndRefresh} style={{cursor: 'pointer'}} color='white' size={40}/>
                <span style={{color:'black'}}> Back</span>
            </div>

            <div id='courseSubjects-hd' >
                <h1 style={{color:'black'}}>RESEARCH METHODOLOGY</h1> 
                <p style={{color:'white'}}>Here are lists of availaible topics in Research Methodology. Click to learn more.</p>
                <br />
            </div>

            <div>

                <input placeholder="Search Topic" onChange={event => setQuery(event.target.value)}  style={{width:'40vw',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  className="dashinput" />

                <br />
                <br />

                <div className='courseSubjects-cont'>
                                
                    {
                        research.filter(researchz => {

                            if (query === '') {
                                return researchz;
                            } else if (researchz.topic.toLowerCase().includes(query.toLowerCase())) {
                                return researchz;
                            }

                        }).map((research, index) => (

                            
                            <div className='courseSubjects-detailz' key={index}>
                                
                                <h3 rel='noreferrer'onClick={onButtonClick1}> {research.topicone}</h3> 
                               
                                <h3 rel='noreferrer' onClick={onButtonClick2}> {research.topictwo}</h3>

                                <h3 rel='noreferrer' onClick={onButtonClick3}> {research.topicthree}</h3>

                                <h3 rel='noreferrer' onClick={onButtonClick4}> {research.topicfour}</h3>

                                <h3 rel='noreferrer' onClick={onButtonClick5}> {research.topicfive}</h3>
                                
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

export default ResearchMethodology;
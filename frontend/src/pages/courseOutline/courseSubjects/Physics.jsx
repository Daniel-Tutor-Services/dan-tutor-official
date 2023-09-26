import './courseSubjects.css';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import physics from '../courseContents/physics.json';



function Physics() {
    
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
            
            <div style={{display:'flex', justifyContent:'start'}}>
                <Link to= '/dash-board'>
                    <BiArrowBack color='white' size={40}/>
                </Link>
            </div>

            <div >
                <h1 id='courseSubjects-hd' style={{color:'white'}}>PHYSICS</h1> 
                <p style={{color:'white'}}>Here are lists of availaible topics in Physics. Click to learn more.</p>
                <br />
            </div>




            <div>

                <input placeholder="Search Topic" onChange={event => setQuery(event.target.value)}  style={{width:'40vw',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  className="dashinput" />

                <div className='courseSubjects-cont'>
                                
                    {
                        physics.filter(physicz => {

                            if (query === '') {
                                return physicz;
                            } else if (physicz.topic.toLowerCase().includes(query.toLowerCase())) {
                                return physicz;
                            }

                        }).map((physics, index) => (

                            <div className='courseSubjects-detailz' key={index}>
                                
                                <h3> <a href=" https://www.toppr.com/guides/physics/motion-in-a-plane/projectile-motion/" target='_blank' rel='noreferrer'> {physics.topicpr}</a> </h3>

                                <h3> <a href=" https://byjus.com/physics/introduction-to-motion/"  target='_blank' rel='noreferrer'> {physics.topicmo}</a></h3>

                                <h3> <a href=" https://byjus.com/physics/electromagnetism/#:~:text=Electromagnetism%20is%20a%20branch%20of,%2C%20electric%20fields%2C%20and%20light." target='_blank' rel='noreferrer'> {physics.topicel}</a></h3>

                                <h3> <a href=" https://ehss.energy.gov/ohre/roadmap/achre/intro_9_2.html#:~:text=As%20its%20name%20implies%2C%20radioactivity,to%20a%20more%20stable%20configuration."  target='_blank' rel='noreferrer'> {physics.topicrad}</a></h3>

                                <h3> <a href=" https://www.scribbr.com/methodology/random-vs-systematic-error/#:~:text=Random%20error%20is%20a%20chance,scale%20records%20an%20incorrect%20measurement)."  target='_blank' rel='noreferrer'> {physics.topicra}</a></h3>

                                <h3> <a href=" https://en.wikipedia.org/wiki/Thermodynamics"  target='_blank' rel='noreferrer'> {physics.topicth}</a></h3>

                                <h3> <a href=" https://en.wikipedia.org/wiki/Mechanics#:~:text=Mechanics%20(from%20Ancient%20Greek%3A%20%CE%BC%CE%B7%CF%87%CE%B1%CE%BD%CE%B9%CE%BA%CE%AE,position%20relative%20to%20its%20environment."  target='_blank' rel='noreferrer'> {physics.topicme}</a></h3>

                                <h3> <a href=" https://www.newscientist.com/definition/quantum-physics/"  target='_blank' rel='noreferrer'> {physics.topicqu}</a></h3>

                                <h3> <a href=" https://study.com/academy/lesson/optics-physics-overview-types.html"  target='_blank' rel='noreferrer'> {physics.topicop}</a></h3>

                                <h3> <a href=" https://www.britannica.com/science/physics-science/Nuclear-physics"  target='_blank' rel='noreferrer'> {physics.topicnu}</a></h3>

                            </div>
                        ))
                    }

                </div>      
                
            </div>

        </div>
    )
}

export default Physics;
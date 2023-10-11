import './courseSubjects.css';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import mathematics from '../courseContents/mathematics.json';



function Mathematics() {
        
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

        <div className='courseSubjects-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center', padding:'3rem  1.5rem', paddingBottom:'100%', width:'100%', background:'#00296f'}}>

            <div style={{display:'flex', justifyContent:'start', alignItems:'center', color:'whitesmoke', gap:'1rem'}}>
                <BiArrowBack onClick={goBackAndRefresh} style={{cursor: 'pointer'}} color='white' size={40}/>
                <span>Back</span>
            </div>

            <div id='courseSubjects-hd' >
                <h1 style={{color:'white'}}>MATHEMATICS</h1> 
                <p style={{color:'wheat'}}>Here are lists of availaible topics in Mathematics. Click to learn more.</p>
                <br />
            </div>



            <div>

                <input placeholder="Search Topic" onChange={event => setQuery(event.target.value)}  style={{width:'42vw',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  className="dashinput" />

                <br />
                <br />

                <div className='courseSubjects-cont'>
                    
                    {
                        mathematics.filter(mathematicz => {

                            if (query === '') {
                                // alert ('kesh')
                                return mathematicz;
                            } else if (mathematicz.topic.toLowerCase().includes(query.toLowerCase())) {
                                return mathematicz;
                            }

                            else if ( mathematicz.topic.toLowerCase().includes(query.toLowerCase())=== '' ) {
                                console.log('kesh');
                            }
                        }).map((mathematics, index) => (

                            <div className='courseSubjects-detailz' key={index}>
                                <h3> <a href="https://www.cuemath.com/data/standard-deviation/" target='_blank' rel='noreferrer' >{mathematics.topicsd} </a></h3>

                                <h3> <a href="https://www.britannica.com/science/differentiation-mathematics"  target='_blank' rel='noreferrer'>{mathematics.topicdi} </a></h3>

                                <h3> <a href="https://www.mathsisfun.com/calculus/integration-introduction.html "  target='_blank' rel='noreferrer'>{mathematics.topicin} </a></h3>

                                <h3> <a href=" https://www.intellspot.com/types-graphs-charts/"  target='_blank' rel='noreferrer'>{mathematics.topicgr} </a></h3>

                                <h3> <a href=" https://www.statisticshowto.com/probability-and-statistics/descriptive-statistics/pie-chart/"  target='_blank' rel='noreferrer'>{mathematics.topicpi} </a></h3>

                                <h3> <a href=" https://byjus.com/maths/index/"  target='_blank' rel='noreferrer'>{mathematics.topicind} </a></h3>

                                <h3> <a href="https://www.mathsisfun.com/algebra/quadratic-equation.html "  target='_blank' rel='noreferrer'>{mathematics.topicqe} </a></h3>

                                <h3> <a href="https://www.investopedia.com/terms/p/permutation.asp#:~:text=The%20term%20permutation%20refers%20to,order%20of%20the%20arrangement%20matters. "  target='_blank' rel='noreferrer'>{mathematics.topicpe} </a></h3>

                                <h3> <a href=" https://www.britannica.com/science/matrix-mathematics"  target='_blank' rel='noreferrer'>{mathematics.topicma} </a></h3>

                                <h3> <a href=" https://thirdspacelearning.com/gcse-maths/geometry-and-measure/bearings-maths/"  target='_blank' rel='noreferrer'>{mathematics.topicbe} </a></h3>

                            </div>
                        ))
                    }

                                            
                </div>   

                <div className="nocourse" style={{background:'red',display:'flex', justifyContent:'center', alignItems:'center', transform:'none', borderRadius:'20px', color:'black', width:'42vw', padding:'0.5rem', margin:'0 auto'}}> 

                    <marquee  direction="left">
                        <p style={{display:'flex', justifyContent:'center',padding:'0.3rem', margin:'10px'}}>
                            No Other Topic Available
                        </p>
                    </marquee>
                </div>  
                
            </div>

        </div>
    )
}

export default Mathematics;
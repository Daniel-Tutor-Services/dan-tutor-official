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
                <p style={{color:'black'}}>Here are lists of availaible topics in Mathematics. Click to learn on.</p>
                <br />
            </div>

            <div className='courseSubjects-cont'>
                {
                    mathematics.map((mathematics, index) => (
                        <React.Fragment key={index}>

                            <div className='courseSubjects-detailz'>
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
                        
                        </React.Fragment>
                    ))
                }
                
            </div>

        </div>
    )
}

export default Mathematics;
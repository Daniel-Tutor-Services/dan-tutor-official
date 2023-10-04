import React from 'react';
import allstaffs from './allstaffs.json';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';





function AllStaffPage() {
    
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

        <div className='staff-header' onFocus={ScrollToTop()} style={{margin:'0 auto', textAlign:'center',padding:'3em 3rem', width:'100%', background:'grey'}}>


            <div style={{display:'flex', justifyContent:'start'}}>
                <Link to= '/about'>
                    <BiArrowBack color='white' size={30}/>
                </Link>
            </div>

            <div >
                <h1 id='staff-hd' style={{color:'white'}}>Meet Our Dedicated Instructors</h1> 
                <p>Here is a full list of all the instructors in charge of various courses. You can reach out to them for more information.</p>
                <br />
            </div>


            <div className='staff-images'>
                {
                    allstaffs.map((allstaff, index) => (
                        <React.Fragment key={index}>

                            <div className='staff-imagez'>
                                <img src={allstaff.img} alt={allstaff.name} />
                                <div className='staff-detailz'>
                                    <h3>{allstaff.name}</h3>
                                    <p>{allstaff.about}</p>
                                    <p style={{color:'black'}}>{allstaff.number}</p>

                                </div>
                            </div>
                        
                        </React.Fragment>
                    ))
                }
                
            </div>

        </div>
    )
}

export default AllStaffPage;
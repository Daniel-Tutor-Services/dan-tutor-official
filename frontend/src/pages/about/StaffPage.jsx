import React from 'react';
import './StaffPage.css';
import staffs from './staffs.json';
import { Link } from "react-router-dom";
import CustomButton from '../../components/customButton/CustomButton.jsx';





function StaffPage() {

    return (

        <div className='staff-page'>  

            <div className='staff-info'>

                <div className='staff-images'>

                    {
                        staffs.map((staff, index) => (
                        <React.Fragment key={index}>
                            <div className='staff-imagez'>
                                <img src={staff.img} alt={staff.name} />

                                <div className='staff-detailz'>
                                    <h1>{staff.name}</h1>
                                    <p>{staff.about}</p>
                                </div>

                            </div>
                        
                        </React.Fragment>
                        ))
                    }

                </div>
                 
                <div className ="staff-btnn">              
                    <Link to='/allstaffpage' pathname='/instructorspage' className ="staff-btn">                     
                        <CustomButton title= "OTHER STAFF (INSTRUCTORS)"  style={{width:'200px', height:'60px', color:'white', fontSize:'.7rem'}}/>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default StaffPage;
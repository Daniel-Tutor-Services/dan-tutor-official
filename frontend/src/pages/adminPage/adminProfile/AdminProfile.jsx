import React from 'react'
import logo from '../../../assets/itf_log.png';
import './AdminProfile.css'
import { Password,Gear,User,SignOut,Lock,IdentificationBadge,Envelope,Phone} from "phosphor-react"
import { Link } from 'react-router-dom';

function AdminProfile() {
  return (
    
      <div className="Admin-profile">
            <div className="Admin-sidebar">
                <Link to='/admin-dash'className='links'>        
                   <div  className='Admin-icon'>
                   <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                   <p> Dashboard</p>
                   </div>
               </Link>

            <div  className='Admin-icon' >
                <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p> Admin Profile</p>
            </div>
            <Link to='/change-password'className='links'> 
            <div  className='Admin-icon'>
            <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Change password</p>
            </div>
            </Link>

            <div  className='Admin-icon'>
            <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Privacy</p>
            </div>
            <Link to='/login'className='links'> 
            <div  className='Admin-icon'>
            <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin"  />
                <p>Log Out</p>
            </div>
            </Link>

        </div> 
        <div className="Admin-form">
            <form action="" >
            <div className='Admin-innercon'>

                <div className='profile-img'>
                    <img src={logo} alt="Logo" className='img'/>
                </div>

                <div className='h2'>
                <h2>ADMIN</h2>
                </div>

                <div className="Admin-main" >
                   <IdentificationBadge size={30} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                 <p>Name</p> 
                 <div className='adminborder'> </div>
    
                </div>
                <div className="Admin-main" >
                   <Envelope size={30} style={{ marginRight: '1rem'}} weight="thin" />
                 <p>Email</p> 
                 <div className='adminborder'> </div>
                </div>

                <div className="Admin-main" >
                   <User size={30} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                 <p>Title</p> 
                 <div className='adminborder'> </div>
                </div>
                <div className="Admin-main" >
                   <Phone size={30}  color='black' style={{ marginRight: '1rem'}} weight="thin" />
                 <p>Phone Number</p> 
                 <div className='adminborder'> </div>
                </div>
               
            
              
            </div>
            </form>
        </div>
    </div>


  )
}

export default AdminProfile
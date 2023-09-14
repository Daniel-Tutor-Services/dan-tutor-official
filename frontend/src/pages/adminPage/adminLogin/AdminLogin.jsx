import React from 'react'
import img from '../../assets/image2.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import './AdminLogin.css'

function AdminLogin() {
  return (
    <div className="smallConta">
          <form className='forma'>
            <div className="cola">          
              <h1>Admin Login</h1>
              <CustomInput placeholder='Email*' style = {{width: '100%'}} />
              <CustomInput placeholder='Password*' type ='password' style = {{width: '100%'}} />
              <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}} />
              {/* <p style={{marginBottom: 'none'}}>Forgot password?</p> */}
            </div>
          </form>
        <div className="col-2a">
          <img src={img} alt = 'learning' />
          <div className="absa">
            <img src={logo} alt="Logo" className='imga'/>
            <h1>Welcome Back Admin</h1>
          </div>
        </div>
    </div>
  )
}

export default AdminLogin
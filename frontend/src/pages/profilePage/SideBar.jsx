import './SideBar.css';
import dtlogo from '../../assets/dtlogo.png';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { AiFillDashboard } from 'react-icons/ai';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react";


function SideBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [logoutApiCall] = useLogoutMutation();


    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            toast.error(`Logged Out Sucessful`, {
                position: toast.POSITION.TOP_RIGHT
            })
            navigate('/login');
        } catch (err) {
            alert(err);
            
        }
    }


   
    return (
        
        <div style={{background:'white'}} className="Sidebar-con ">

            <Link to='/' className='links'>
                <div className='sidebar-img' >
                    <img src={dtlogo} alt="dtlogo" className='img'/>
                </div>
            </Link>


            <NavLink to='/dash-board' className='links'>
                <div  className='sidebar-icon'>
                    <AiFillDashboard color='black' style={{ marginRight: '1rem'}} weight="thin"/>
                    <p>DashBoard</p>
                </div>
            </NavLink>
            
            
            <NavLink to='/profile-page' className='links'>        
                <div  className='sidebar-icon'>
                    <User size={18} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>Profile</p>
                </div>
            </NavLink>

            <NavLink to="/edited-profile" className='links' >
                <div  className='sidebar-icon' >
                    <Gear size={18} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>Edit Profile</p>
                </div>
            </NavLink>

            <NavLink to='/change-password' className='links'>
                <div  className='sidebar-icon'>
                    <Lock size={18} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>Change password</p>
                </div>
            </NavLink>

            <NavLink to='/termsandconditions' className='links'>
                <div  className='sidebar-icon'>
                    <Password size={18} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>Terms and Conditions</p>
                </div>
            </NavLink>
            
            <NavLink to='/privacypolicy' className='links'>
                <div  className='sidebar-icon'>
                    <Lock size={18} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>Privacy Policy</p>
                </div>
            </NavLink>  
            
            <Link to='/login' className='links' onClick={logoutHandler}> 
                <div className='sidebar-icon'>
                    <SignOut size={18} color='black' style={{ marginRight: '1rem'}} weight="thin"  />
                    <p >Log Out</p>
                </div>
            </Link>

        </div> 

    ) 
}

export default SideBar;

import './NavBar.css';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { logout } from '../../slices/authSlice';
import { useDispatch, useSelector  } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { useLocation, useNavigate, NavLink,  Link} from 'react-router-dom';
import dtlogo from '../../assets/dtlogo.png';
import Hamburger from '../../components/Hamburger/Hamburger';
import CustomButton from '../../components/customButton/CustomButton';
import profile from '../../assets/dashboard/profile.svg';
import arrow from '../../assets/dashboard/arrow.svg';





function NavBar() {

    const { userInfo } = useSelector((state) => state.auth);

    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [logoutApiCall] = useLogoutMutation();


    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            toast.error(`Logged Out Successful`, {
                position: toast.POSITION.TOP_RIGHT
            })
            navigate('/login');
        } catch (err) {
            alert(err);         
        }
    }


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

        <div className='nav-barr'>
            
            <div className='dtlogo'>
                <Link to='/' className='links' id='dtlogg'>
                    <img src={dtlogo} alt="dtlogo" />
                </Link>
            </div>

            <nav className='nav'>
                
                <ul className='contents'>
                    <NavLink to='/'  className='links'  activeClassName="active" activeStyle={{color: "red"}} onFocus={ScrollToTop()} >
                        <li className='ho'> Home</li>
                    </NavLink>

                    <NavLink to='/about' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                        <li>About</li>
                    </NavLink>

                    <NavLink to='/dash-board' className='links'  onFocus={ScrollToTop()} >        
                        <li>Courses</li>
                    </NavLink>
         

                    {
                        userInfo ?
                        (
                            <Link to='/profile-page' className='links'>        
                                <li>Profile</li>
                            </Link>
                        )
                        
                        :
                        
                        (
                            <Link to='/login' className='links'>        
                                <li>Profile</li>
                            </Link>
                        )
                    }
                
                    <Link to='/contact-page' className='links'>
                        <li>Contact</li>
                    </Link> 

                    <NavLink to='/termsandconditions' className='links' onFocus={ScrollToTop()}>        
                        <li className='hambli'> Terms </li> 
                    </NavLink>
                    
                </ul>

            </nav>
            
            

            <div className='applyz'>
                {
                    userInfo ? 
                 
                    <>
                        {userInfo.isAdmin ?
                            <>
                                (<Link to='/admin-dash' className='links'> 
                                    <p> Admin Dashboard </p> 
                                </Link>)
                            </>
                            :  
                            <>
                                    <div className='userpro'>

                                        <div className='prodiv'>
                                            <img src={profile} alt='profileicon' style={{width:'20px'}}/>

                                            <img src={arrow} alt='arrowdown' style={{width:'20px'}} className='arrowhov'/> 

                                            <div className='droplogout'>

                                            <br />
                                                <Link to='/profile-page' className='links'> 
                                                    <h6 style={{fontSize:'0.8em', color:'darkblue', marginRight:'50px'}}>{`${userInfo.name}`}</h6>
                                                </Link> 

                                                <Link to='/login' className='links' onClick={logoutHandler}> 
                                                    <h6  style={{cursor: 'pointer', color:'red'}}>Logout</h6>
                                                </Link> 

                                            </div>
                                            
                                        </div>
                                    </div>

                            </>
                        }
                    </>
                    : 
                    <>
                        <Link to='/login' className='links'>
                            <CustomButton title="LOGIN" style={{width:'170px', height:'50px', padding:'1rem', fontSize:'.7rem', marginRight:'100px', marginTop:'50px'}}/>
                        </Link>
                    </>
                }
            </div>

            <div className='home-mobb'>
                <Hamburger/>
            </div>
            
        </div>
    )
}

export default NavBar;
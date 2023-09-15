import './Hamburger.css'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { logout } from '../../slices/authSlice'
import { useDispatch, useSelector  } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { useLocation, useNavigate, NavLink} from 'react-router-dom';





function Hamburger() {
    
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
    
        <div>
            <div className='ham-index'>
                <input type="checkbox" className='res-inp'/>
                    
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                
                <ul className='hamburgerr'>
                    <br />

                    <li className='hambli'> 
                        <NavLink to='/' className='links' onFocus={ScrollToTop()}>        
                            <p> Home </p>
                        </NavLink>
                    </li>

                    <li className='hambli'> 
                        <NavLink to='/about' className='links' onFocus={ScrollToTop()}>        
                            <p> About </p>
                        </NavLink>
                    </li>

                    <li className='hambli'> 
                        <NavLink to='/dash-board' className='links' onFocus={ScrollToTop()}>        
                            <p> Courses</p>
                        </NavLink>
                    </li>


                    {
                        userInfo ? 
                        
                        (
                            <li className='hambli'> 
                                <NavLink to='/profile-page' className='links'>        
                                    <p>Profile</p>
                                </NavLink>
                            </li>

                        )

                        :
                    
                        (
                            <li className='hambli'> 
                                <NavLink to='/login' className='links' onFocus={ScrollToTop()}>        
                                    <p>Profile</p>
                                </NavLink>
                            </li>

                        )
                    }

                    
                    <li className='hambli'> 
                        <NavLink to='/contactus' className='links' onFocus={ScrollToTop()}>
                            <p>Contact</p>
                        </NavLink>
                    </li>
                    
                    <li className='hambli'>                  
                        <NavLink to='/termsandconditions' className='links' onFocus={ScrollToTop()}>        
                            <p className='hambli'>Terms and Condition </p>
                        </NavLink>
                    </li>

                    {
                        userInfo ?
                        
                        (
                            <li className='hambli'> 
                                <NavLink to='/login' className='links' onClick={logoutHandler}>        
                                    <p>Logout</p>
                                </NavLink>
                            </li>  
                        )
                        
                        : 
                        
                        (

                            <li className='hambli'> 
                                <NavLink to='/login' className='links' onFocus={ScrollToTop()}>        
                                    <p>Login</p>
                                </NavLink>
                            </li>
                        )

                    }

                </ul>

            </div>

        </div>
    )
}

export default Hamburger;

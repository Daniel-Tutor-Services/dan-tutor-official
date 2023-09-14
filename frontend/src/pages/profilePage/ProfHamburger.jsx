import '../../components/Hamburger/Hamburger.css'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { logout } from '../../slices/authSlice'
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { useLocation, useNavigate, NavLink} from 'react-router-dom';





function ProfHamburger() {

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

                    <li className='hambli'> 
                        <NavLink to='/' className='links' onFocus={ScrollToTop()}>        
                            <p> Home </p>
                        </NavLink>
                    </li>

                    <li className='hambli'> 
                        <NavLink to='/dash-board' className='links' onFocus={ScrollToTop()}>        
                            <p>DashBoard</p>
                        </NavLink>
                    </li>

                    <li className='hambli'> 
                        <NavLink to='/profile-page' className='links' onFocus={ScrollToTop()}>        
                            <p>Profile</p>
                        </NavLink>
                    </li>

                    <li className='hambli'> 
                        <NavLink to='/edited-profile' className='links' onFocus={ScrollToTop()}>        
                            <p>Edit Profile</p>
                        </NavLink>
                    </li>

                    <li className='hambli'> 
                        <NavLink to='/change-password' className='links' onFocus={ScrollToTop()}>        
                            <p>Change password</p>
                        </NavLink>
                    </li>
                    
                    <li className='hambli'> 
                        <NavLink to='/privacypolicy' className='links' onFocus={ScrollToTop()}>        
                            <p>Privacy Policy</p>
                        </NavLink>
                    </li>
                    
                    <li className='hambli'> 
                        <NavLink to='/' className='links' onFocus={ScrollToTop()} onClick={logoutHandler}>        
                            <p >Log Out</p>
                        </NavLink>
                    </li>


                </ul>


            </div>

        </div>
    )
}

export default ProfHamburger;

import './LoginPage.css'; 
import { toast } from 'react-toastify';
import {useState, useEffect} from 'react';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import {  useLoginMutation } from '../../slices/usersApiSlice';
import img from '../../assets/image2.jpg';
import dtlogo from '../../assets/dtlogo.png';
import Loader from '../../components/loader/Loader';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';


function LoginPage () {

    // Declaration of variables 

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [passwordShown, setPasswordShown] = useState(true);    
    
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [login, {isLoading} ] = useLoginMutation();

    const { userInfo } = useSelector ((state) => state.auth);


    useEffect (() => {
        if (userInfo) {
            navigate('/');
        }

    }, [navigate, userInfo]);


    const loginUser = async (e) =>{
        e.preventDefault();
        try {
            const res = await login ({email, password}).unwrap();
            dispatch(setCredentials({...res}))
            toast.success("Login Successful", {
                position: toast.POSITION.TOP_RIGHT
            }) 
            navigate('/')

        } catch (err) {
            toast.error(err?.data.message || err.error);               
        }
    }  




    return (

        <div className="smallContl">

            <form className='forml' onSubmit={loginUser}>
                <div className="coll"> 
                
                    <Link to='/' className='links'>
                        <div className="logmob">
                            <img src={dtlogo} alt="dtlogo" className='mob-img' style={{width:'200px', height:'200px'}}/>
                        </div>
                    </Link>  


                    { isLoading && <Loader/> }

                    <h1>Login</h1>

                    <CustomInput placeholder='Email Address*' value = {email} name="email" style = {{ width: '100%'}} onChange ={(e) => setEmail (e.target.value)} />

                    <CustomInput placeholder='Password*' value = {password} name="password"   type={passwordShown ? "password" : "text"}  style = {{width: '100%'}} onChange ={(e) => setPassword (e.target.value)}/>
                  
                    {passwordShown ? <AiFillEyeInvisible style={{margin:'0 90%'}} size={25} color='black' onClick={togglePassword}/> : <AiFillEye  color='black' size={25} style={{margin:'0 90%'}}  onClick={togglePassword}/> } 
 

                    <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}}  />
                  
                    <Link to='/forgot-password' style = {{textDecoration: 'none'}}>
                        <p style={{marginBottom: 'none'}}> Forgot password? </p>
                    </Link>

                    <div className='bottomzl' style={{marginTop: 'none', textAlign: 'left'}}> 
                        <h5 style={{fontSize:'1rem', fontWeight:'bold'}}>Yet to register with us? 
                            <span> 
                                <Link to='/signup' style = {{textDecoration: 'none'}}  id='btspan'> <span>Sign Up</span> </Link> 
                            </span>

                        </h5>
                    </div>

                </div>

            </form>

            <div className="col-2l">
                <img src={img} alt = 'learning' className='img' />

                <div className="absl">
                    <div className="flexl">
                        <Link to='/' className='links'>
                            <img src={dtlogo} alt="dtlogo" className='imgl'/> <br />
                        </Link>

                        <h1>Welcome Back!</h1>

                    </div>

                </div>
            </div>

        </div>  
    )
}

export default LoginPage;
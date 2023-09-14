import './LoginPage.css'; 
import { toast } from 'react-toastify';
import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setCredentials } from '../../slices/authSlice';
import {  useDispatch, useSelector } from 'react-redux';
import {  useLoginMutation } from '../../slices/usersApiSlice'
import img from '../../assets/image2.jpg';
import dtlogo from '../../assets/dtlogo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';



function LoginPage () {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [login] = useLoginMutation();


    const { userInfo } = useSelector ((state) => state.auth);

    useEffect (() => {
        if (userInfo) {
            navigate('/dash-board');
        }

    }, [navigate, userInfo]);


    const submitHandler = async (e) =>{
        e.preventDefault();
        try {
            const res = await login ({email, password}).unwrap();
            dispatch(setCredentials({...res}))
            toast.success("Login Successful", {
                position: toast.POSITION.TOP_RIGHT
            }) 
            navigate('/dash-board')

        } catch (err) {
            toast.error(err?.data.message || err.error);               
        }
    }




    return (
        <div className="smallContl">

            <form className='forml' onSubmit={submitHandler}>
                <div className="coll"> 
                
                    <Link to='/' className='links'>
                        <div className="logmob">
                            <img src={dtlogo} alt="dtlogo" className='mob-img' style={{width:'200px', height:'200px'}}/>
                        </div>
                    </Link>  

                    <h1>Login</h1>

                    <CustomInput placeholder='Email*' value = {email} name="email" style = {{width: '100%'}} onChange ={(e) => setEmail (e.target.value)} />

                    <CustomInput placeholder='Password*' value = {password} name="password" type ='password' style = {{width: '100%'}} onChange ={(e) => setPassword (e.target.value)}/>

                    <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}}  />
                  
                    <Link to='/forgot-password' style = {{textDecoration: 'none'}}>
                        <p style={{marginBottom: 'none'}}> Forgot password?</p>
                    </Link>

                    <div className='bottomzl' style={{marginTop: 'none', textAlign: 'left'}}> 
                            <h5 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Yet to register with us? 
                                <span> 
                                    <Link to='/signup' style = {{textDecoration: 'none'}}  id='btspan'> <span>Sign Up</span>
                                    </Link> 
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
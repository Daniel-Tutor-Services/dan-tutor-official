import './SignupPage.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import {  useRegisterMutation } from '../../slices/usersApiSlice';
import validator from 'validator';
import img from '../../assets/image5.jpg';
import dtlogo from '../../assets/dtlogo2.png';
import Loader from '../../components/loader/Loader';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';



function SignupPage () {


    // Declaraion of variables
    
    const [fullName, setFullName] = useState ('');
    const [userName, setUserName] = useState ('');
    const [email, setEmail] = useState ('');
    const [phone, setPhone] = useState ('');
    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState ('');
    
      
    const [isfullNameValid, setFullNameIsValid] = useState(false);
    const [isuserNameValid, setUserNameIsValid] = useState(false);
    const [isemailValid, setEmailIsValid] = useState(false);
    const [isphoneValid, setPhoneIsValid] = useState(false);
    const [ispassWordValid, setPassWordIsValid] = useState(false);
    

    const  [passwordShown, setPasswordShown] = useState(true);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector ((state) => state.auth);
    const [register, {isLoading} ] = useRegisterMutation();


    useEffect (() => {
        if (userInfo) {
            navigate('/waiting-page');
        }

    }, [navigate, userInfo]);




    //Input border styles for validation

    const [fullNameStyle, setFullNameStyle] = useState({
        width: '100%',
        margin: '0 0 0 0',
        border: ''
    });

    const [userNameStyle, setUserNameStyle] = useState({
        width: '100%',
        margin: '0 0 0 0',
        border: ''
    });

    const [emailStyle, setEmailStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    });
    
    const [phoneStyle, setPhoneStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    });

    const [passWordStyle, setPassWordStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    });

    const [confirmPassWordStyle, setConfirmPassWordStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    })

    const redBorder = {
        width: '100%',
        margin: '2% 0 0 0',
        border: '2px solid red'
    }

    const greenBorder = {
        width: '100%',
        margin: '2% 0 0 0',
        border: '2px solid green'
    }
    

    
    //check for valid fullname
    
    function validFullname(){   

        if(fullName.length === 0){
            setFullNameStyle({...redBorder})
            setFullNameIsValid(false)
            toast.warn(`Full Name Required`, {
            position: toast.POSITION.TOP_RIGHT
            })
        }

        else{
            setFullNameStyle({...greenBorder})
            setFullNameIsValid(true)
        }
    }


    // check for input alphabet only 

    const onInputChange = e => {

        const { value } = e.target;
        const re = /^[A-Za-z][A-Za-z\s]*$/;

        if (value === "" || re.test(value)) {
            setFullName(value);
        }
    
    }

    

    //check for valid username
    
    function validUsername(){

        if(userName.length === 0){
            setUserNameStyle({...redBorder})
            setUserNameIsValid(false)
            toast.warn(`User Name Required`, {
            position: toast.POSITION.TOP_RIGHT
            })
        }

        else{
            setUserNameStyle({...greenBorder})
            setUserNameIsValid(true)
        }
    }



    
    //check for valid email

    function validEmail(){

        const emailvalidate = validator.isEmail(email)

        if(email.length === 0){
            setEmailStyle({...redBorder})
            setEmailIsValid(false)

            toast.warn("Email Address Required ", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        
        else{

            if(emailvalidate){
                setEmailStyle({...greenBorder})
                setEmailIsValid(true)
            }
            
            else{
                setEmailStyle({...redBorder})
                setEmailIsValid(false)

                toast.warn("Invalid Email Adreess", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        }
    }



    //check for valid phone number

    function validPhone(){

        if(phone.length == 0){
            setPhoneStyle({...redBorder})
            setPhoneIsValid(false)

            toast.warn("Invalid Phone Number", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        else{
            if(validator.isNumeric(phone)){
                setPhoneStyle({...phoneStyle, border: '2px solid green'})
                setPhoneIsValid(true)
            }
            
            else{
                setPhoneStyle({...redBorder})
                setPhoneIsValid(false)
            
                toast.error("Invalid Phone Number", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        }
    }



    //check for valid password

    function validPassword(){
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

        if(!strongPassword.test(password)){
            setConfirmPassWordStyle({...redBorder})
            setPassWordIsValid(false)
            
        }
        
        else {
            setPassWordStyle({...greenBorder})          
            toast.success("Password hashed successfully", {
                position: toast.POSITION.TOP_RIGHT
            })
            setPassWordIsValid(true)
        }
    }


    //validate the form

    const registerNewUser = async (e) =>{

        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
        
        e.preventDefault();
        validFullname();
        validUsername();
        validEmail();
        validPhone();
        validPassword();
        

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    

        else if (!strongPassword.test(password)) {
            return toast.error("Password not strong enough, Please Use atleast 8 characters with combination of : uppercase, lowercase, number and special character ", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        
        else if(phone.length < 11){
            setPhoneStyle({...redBorder})
            toast.warn("Invalid Phone Number, Number too short", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

    

        else if (isfullNameValid && isuserNameValid && isemailValid && ispassWordValid && isphoneValid !== true) {
            return toast.warn("Please Enter Correct Information", {
                position: toast.POSITION.TOP_RIGHT
            });
        } 
        

        else {
            try {
                const res = await register ({fullName, userName, email, phone, password, confirmPassword}).unwrap();
                dispatch(setCredentials({...res}));
                navigate('/waiting-page');
                toast.success("Registration Successful", {
                    position: toast.POSITION.TOP_RIGHT
                }); 
            }   
            
            catch (err) {
                toast.error(err?.data.message || err.error);        
            }
        }
    }




    return (

        <div className="smallCont">

            <form className='form' onSubmit={registerNewUser}>

                <div className="col"> 

                    <Link to='/' className='links'>
                        <div className="signmob">
                            <img src={dtlogo} alt="dtlogo" className='signmob-img' style={{width:'200px', height:'170px'}}/>
                        </div>
                    </Link> 


                    <h2>Join Us on This Journey</h2>

                    { isLoading && <Loader/> }

                    <CustomInput placeholder='FullName*' type="text"  value= {fullName} style = {fullNameStyle}  onChange={onInputChange}/>  <br />

                    <CustomInput placeholder='UserName*' value= {userName} style ={userNameStyle} onChange={(e) => setUserName (e.target.value)} />  <br />
                    
                    <CustomInput placeholder='Email*' value= {email}  type='email' style = {emailStyle} onChange={(e) => setEmail (e.target.value)}/>  <br />
                    
                    <CustomInput placeholder='Phone Number*' value= {phone} style = {phoneStyle} onChange={(e) => setPhone (e.target.value)}/>  <br />

                    <CustomInput placeholder='Password*' value= {password}  name="confirmPassword" type={passwordShown ? "password" : "text"}  style = {confirmPassWordStyle} onChange={(e) => setPassword (e.target.value)}/> 
                    <br />

                    <CustomInput placeholder='Confirm Password*' value= {confirmPassword} type={passwordShown ? "password" : "text"}  style = {passWordStyle} onChange={(e) => setConfirmPassword (e.target.value)}/>
                    <br />

                    {passwordShown ? <AiFillEyeInvisible style={{margin:'0 90%'}}  size={20} color='black' onClick={togglePassword}/> : <AiFillEye  style={{margin:'0 90%'}} color='black' size={20} onClick={togglePassword}/> } 
 
    
                    <CustomButton title = 'SIGN UP'  style = {{width: '100%', margin: '8px 0% auto'}} />

                </div>


                <div className='bottoms'>

                    <h5>By signing up, you agree to our 
                        <Link to='/termsandconditions' className='links'>
                            <span> Terms of Use </span>
                        </Link> 
                        
                        and
                        
                        <Link to='/privacypolicy' className='links'>
                            <span> Privacy Policy</span>
                        </Link>
                        .
                    </h5>
                    
                    <p>Already have an account? <span style={{fontWeight:'bold'}}> <Link to='/login' className='links'> Login </Link> </span></p>
                
                </div>

            </form>


            <div className="col-2">
                <img src={img} alt = 'learning' className='signimg'/> 

                <div className="abs">
                    <div className="flexs">
                        <Link to='/' className='links'>
                            <img src={dtlogo} alt="dtlogo" className='img'  style={{width:'350px', height:'250px'}}/>
                        </Link>
                    </div>

                    <h1>Welcome to our E-learning center</h1>
                    <p>Whether you are a student looking to supplement your studies, a professional aiming to upskill, or someone with a curiosity to explore new subjects and love to learn, DAN-TUTOR is here to support your learning journey. We invite you to join our community of learners, engage in thoughtful discussions, and embark on a path of continuous growth.</p>
                </div>

            </div>
            
        </div>
    )
}

export default SignupPage;
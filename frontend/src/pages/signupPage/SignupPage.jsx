import './SignupPage.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import img from '../../assets/image5.jpg';
import dtlogo from '../../assets/dtlogo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';




// eslint-disable-next-line react/prop-types
function SignupPage({ API_URL }) {
    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();

    const [nameStyle, setNameStyles] = useState({
        width: '100%',
        margin: '0 0 0 0',
        border: ''
    })

    const [passStyle, setPassStyles] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    })

    const [phoneStyle, setPhoneStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    })

    const [conpasStyle, setConpasStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    })

    const [emailStyle, setEmailStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: ''
    })

    const redBorder = {
        width: '100%',
        margin: '2% 0 0 0',
        border: '3px solid red'
    }

    const greenBorder = {
        width: '100%',
        margin: '2% 0 0 0',
        border: '3px solid green'
    }
    
    const [isnameValid, setNameIsValid] = useState(false);
    const [isemailValid, setEmailIsValid] = useState(false);
    const [isphoneValid, setPhoneIsValid] = useState(false);
    const [ispassValid, setPassIsValid] = useState(false);
    const check = Object.is(userData.password,userData.confirmPassword)


    function updateUserdata(e){
        const {value, name} = e.target

        setUserData(initialUserData => ({
            ...initialUserData,
            [name]: value
        }))
        // console.log(userData)
    }


    
    function validFullname(){
        //check for full name
        if(userData.fullName.length === 0){
            setNameStyles({...redBorder})
            setNameIsValid(false)
            toast.warn(`Full Name Required`, {
            position: toast.POSITION.TOP_RIGHT
            })
        }

        else{
            setNameStyles({...greenBorder})
            setNameIsValid(true)
        }
    }

    

    function validEmail(){
        //check for email
        const emailvalidate = validator.isEmail(userData.email)

        if(userData.email.length === 0){
            setEmailStyle({...redBorder})
            setEmailIsValid(false)

            toast.warn("Email Required ", {
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


    function validPhone(){
        //check the phone number
        if(userData.phoneNumber.length !== 11){
            setPhoneStyle({...redBorder})
            setPhoneIsValid(false)

            toast.warn("Phone Number not up to eleven", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        else{
            if(validator.isNumeric(userData.phoneNumber)){
                setPhoneStyle({...phoneStyle, border: '2px solid green'})
                setPhoneIsValid(true)
            }
            
            else{
                setPhoneStyle({...redBorder})
                setPhoneIsValid(false)
            
                toast.warn("Invalid Phone Number", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        }
    }




    function validPassword(){
        //check for password
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

        if(strongPassword.test(userData.password)){
            //set the border to green
            setPassStyles({...greenBorder})
            setPassIsValid(true)

            //check for confirm password
            if(check){
                setConpasStyle({...greenBorder})
                setPassIsValid(true)
            }
            
            else{
                setConpasStyle({...redBorder})
                setPassIsValid(false)
            }  
        }
        
        else{
            //set the border to red
            setPassStyles({...redBorder})
            setPassIsValid(false)
            
            toast.warn("Password is not strong enough", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    
    }

    function sendNewUserData(e){
        
        e.preventDefault()
        validFullname();
        validEmail();
        validPhone();
        // validSecQuest();
        validPassword();


        const {password, confirmPassword} = userData;
        
        if (password !== confirmPassword){
            return toast.warn("passwords don't match", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        if(isemailValid && isnameValid && ispassValid && isphoneValid){
            // return console.log(userData)
            
            fetch(`${API_URL}/auth/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            .then((res) => res.json())
            .then((data) => {
                if (data.success){
                    navigate("/waiting-page")
                }

                else{
                    toast.error(`${data.message}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            })
        }
    }
  




    return (
        <div className="smallCont">

            <form className='form' onSubmit={sendNewUserData}>

                <div className="col"> 

                    <Link to='/' className='links'>
                        <div className="signmob">
                            <img src={dtlogo} alt="dtlogo" className='signmob-img' style={{width:'200px', height:'200px'}}/>
                        </div>
                    </Link> 

                    <h2>Join Us on This Journey</h2>

                    <CustomInput placeholder='FullName*' name="fullName" style = {nameStyle} onChange={updateUserdata} />  <br />
                    
                    <CustomInput placeholder='Email*' name="email" style = {emailStyle} onChange={updateUserdata}/>  <br />
                    
                    <CustomInput placeholder='Phone Number*' name="phoneNumber" style = {phoneStyle} onChange={updateUserdata}/>  <br />

                    <CustomInput placeholder='Confirm Password*' name="confirmPassword" type ='password' style = {conpasStyle} onChange={updateUserdata}/> 
                    <br />

                    <CustomInput placeholder='Password*' name="password" type ='password' style = {passStyle} onChange={updateUserdata}/>
                    <br />
                   
    
                    <CustomButton title = 'SIGN UP' style = {{width: '100%', margin: '8px 0% auto'}} />

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
                            <img src={dtlogo} alt="dtlogo" className='img'  style={{width:'300px', height:'300px'}}/>
                        </Link>
                    </div>

                    <h1>Welcome to our E-learning center</h1>
                    <p>Whether you are a student looking to supplement your studies, a professional aiming to upskill, or someone with a curiosity to explore new subjects, DAN-TUTOR is here to support your learning journey. We invite you to join our community of learners, engage in thoughtful discussions, and embark on a path of continuous growth.</p>
                </div>

            </div>
            
        </div>
    )
}

export default SignupPage;
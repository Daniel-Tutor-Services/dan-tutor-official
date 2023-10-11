import { useState } from 'react';
import img from '../../assets/image3.jpg'
import dtlogo from '../../assets/dtlogo2.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './ForgotPassword.css'
import { Link, useNavigate } from 'react-router-dom';




// eslint-disable-next-line react/prop-types
function ForgotPassword({ API_URL }) {
    const [userData, setUserData] = useState({});
    const [securityPhase, setSecurityPhase] = useState(1);
    const [securityQuestion, setSecurityQuestion] = useState('');
    const navigate = useNavigate();

    const updateUserData = (event) => {
        const {name, value} = event.target;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));

        // console.log(userData);
    }

    const validateEmail = async (event) => {
        event.preventDefault();
        
        let response = await fetch(`${API_URL}/auth/validateEmail`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(userData)
        })

        response = await response.json();
        if (response.success){
            setSecurityQuestion(response.securityQuestion);
            setSecurityPhase(phase => (phase + 1));
        }
    }

    const resetPassword = async (event) => {
        event.preventDefault();
        const { newPassword, confirmNewPassword } = userData;

        if (newPassword !== confirmNewPassword)
        return alert("passwords don't match");

        let userData2 = userData;
        delete userData2["confirmNewPassword"];
        setUserData(userData2)

        fetch(`${API_URL}/auth/forgottenpassword`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        .then((res) => res.json())
        .then((res) => {
            alert(res.message);
            if (res.success) navigate("/login")
        })
    }




    return (
   
        <div className="smallContf">
            <form className='formf' onSubmit={ securityPhase === 1 ? validateEmail : resetPassword }>

                <div className="colf">

                    <Link to='/' className='links'>
                        <div className="flexz">
                            <img src= {dtlogo} alt="dtlogo" style={{width:'200px', height:'150px'}} />     
                        </div>
                    </Link>  

                    <h2>Forgot your password?</h2>  


                    {
                        securityPhase === 1 ? 

                        <>
                            <p style={{paddingTop:'3rem'}}>Please enter your email</p>

                            <CustomInput required={true} name="email" value={userData.email} onChange={updateUserData} placeholder='Email Address*' style = {{width: '100%'}} />
                        </>
                        :
                        <>
                            <p>{securityQuestion}</p>
                            <CustomInput required={true} name="answer" value={userData.answer} onChange={updateUserData} placeholder='Answer*' style = {{width: '100%'}} />
                            <CustomInput required={true} name="newPassword" value={userData.newPassword} onChange={updateUserData} placeholder='New password*' style = {{width: '100%'}} type="password" />
                            <CustomInput required={true} name="confirmNewPassword" value={userData.confirmNewPassword} onChange={updateUserData} placeholder='Confirm new password*' style = {{width: '100%'}} type="password" />
                        </>
                    }

                    {/* <Link to='/login'className='links'> */}
                    <CustomButton title={securityPhase === 1 ? 'Confirm Email' : 'Reset Password'} style = {{width: '100%', marginTop: '20px'}} />
                    {/* </Link> */}

                </div>
                    
                <div className='bottomf'>  
                    <Link to='/login' className='links'>
                        <h5> Log In?</h5>
                    </Link>
                </div>

            </form>

            <div className="col-2f">
                <img src={img} alt = 'Forgot Password' />
            </div>

        </div>
    )
}

export default ForgotPassword
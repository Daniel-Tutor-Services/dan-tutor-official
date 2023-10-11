import './ChangePassword.css'
import './EditedProfile.css'
import { toast } from 'react-toastify';
import { AiFillEye } from 'react-icons/ai'
import { useState} from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { useUpdatePassWordMutation } from '../../slices/usersApiSlice'
import SideBar from './SideBar';
import ProfNavBar from './ProfNavBar';
import Loader from '../../components/loader/Loader';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';





function ChangePassword(){

    //Declaration of variables

        
    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState ('');
    const [ispassWordValid, setPassWordIsValid] = useState(false);
   

    const  [passwordShown, setPasswordShown] = useState(true);


    const dispatch = useDispatch();
    const { userInfo } = useSelector ((state) => state.auth);

    const [updatePassWord, {isLoading} ] = useUpdatePassWordMutation();
    
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

  
      
    //Input border for validation

    const [passWordStyle, setPassWordStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: '',
        borderRadius: '15px'
    })

    const [confirmPassWordStyle, setConfirmPassWordStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: '',
        borderRadius: '15px'
    })

        
    const redBorder = {
        width: '100%',
        margin: '2% 0 0 0',
        border: '2px solid red',
        borderRadius: '15px'
    }

    const greenBorder = {
        width: '100%',
        margin: '2% 0 0 0',
        border: '2px solid green',
        borderRadius: '15px'
    }


 
    
    // Check for valid new password

    function validNewPassword(){

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







    // Validate the form

    const updateUserPassword = async (e) =>{

        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
        

        e.preventDefault();
          validNewPassword();


        if ( password !== confirmPassword  ) {

            setConfirmPassWordStyle({...redBorder})
            setPassWordStyle({...redBorder})

            toast.error("Passwords do not match", {
                position: toast.POSITION.TOP_RIGHT
            }); 

        }  


        else if (!strongPassword.test(password)) {
            return toast.error("Password not strong enough, Please Use atleast 8 characters with combination of : uppercase, lowercase, number and special character ", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        
        else if ( ispassWordValid !== true) {
            return toast.warn("Updating new password, Click to confirm", {
                position: toast.POSITION.TOP_RIGHT
            });
        } 
        
            
        else {
            const res = await updatePassWord ({
                _id: userInfo._id,                 
                password,                
            }).unwrap();
            
            dispatch(setCredentials({...res}));
            
            toast.success("Password Updated", {
                position: toast.POSITION.TOP_RIGHT
            }); 
            setConfirmPassWordStyle({...greenBorder})
            setPassWordStyle({...greenBorder})   

            toast.success("Profile Updated Successfully", {
                position: toast.POSITION.TOP_RIGHT
            }); 
        }

    }






    return (
    
        <div className="main11">
    
           
            <div className='side-mobb'>
                <SideBar /> 
            </div>

            <div className='ham-mobb'>
                <ProfNavBar/>
            </div>
            
            <div className='Back11'>

                <form onSubmit={updateUserPassword}>

                    <div style={{display:'flex', justifyContent:'center'}}>
                        { isLoading && <Loader/> }
                    </div>


                    <div className="border2" >
                        <p>Email</p>
                        <CustomInput  name= 'oldPassword'  placeholder ={userInfo.email} style={passWordStyle} onChange={(e) => setPassword (e.target.value)}  readOnly/>


                    </div>

                    <div className="border2" >

                        <p>Create New Password</p>
                        <CustomInput  type={passwordShown ? "password" : "text"}  value ={password}   placeholder='Enter New Paasword' style={passWordStyle}
                        onChange={(e) => setPassword (e.target.value)}/>
                            
                    </div>

                    <div className="border2">
                        <p>Re-Enter Password</p>
                        <CustomInput  type={passwordShown ? "password" : "text"}  value={confirmPassword} placeholder = 'Re-enter New Password'  style={confirmPassWordStyle}  onChange={(e) => setConfirmPassword (e.target.value)}/>

                        {passwordShown ? <AiFillEyeInvisible style={{margin:'0 90%'}}  size={20} onClick={togglePassword}/> : <AiFillEye  style={{margin:'0 90%'}} size={20} onClick={togglePassword}/> } 
                    </div>
                    
                    <div className="border2">
                        <CustomButton title={'Confirm Password'} type='submit' style={{width:'100%', height:'60px',fontSize:'1.1rem', borderRadius:'1rem'}}/>
                    </div> 

                </form>

            </div>

        </div>
  
    )
}

export default ChangePassword;
import './EditedProfile.css';
import { useState} from 'react';
import { toast } from 'react-toastify';
import { setCredentials } from '../../slices/authSlice';
import {  useDispatch, useSelector } from 'react-redux';
import {  useUpdateProfileMutation } from '../../slices/usersApiSlice';
import SideBar from './SideBar';
import validator from 'validator';
import ProfNavBar from './ProfNavBar';
import Loader from '../../components/loader/Loader';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';




function EditedProfile() {
    
    //Declaration of variables

    const dispatch = useDispatch();
    const [fullName, setFullName] = useState ('');
    const [email, setEmail] = useState ('');
    const [phone, setPhone] = useState ('');
    const { userInfo } = useSelector ((state) => state.auth);
    const [updateProfile, {isLoading} ] = useUpdateProfileMutation();

    const [isfullNameValid, setFullNameIsValid] = useState(false);
    const [isemailValid, setEmailIsValid] = useState(false);
    const [isphoneValid, setPhoneIsValid] = useState(false);

    
    
    //Input border styles for validation

    const [fullNameStyle, setFullNameStyle] = useState({
        width: '100%',
        margin: '0 0 0 0',
        border: '',
        borderRadius: '15px'
    })

    const [emailStyle, setEmailStyle] = useState({
        width: '100%',
        margin: '2% 0 0 0',
        border: '',
        borderRadius: '15px'
    })

    const [phoneStyle, setPhoneStyle] = useState({
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

    const yellowBorder = {
        width: '100%',
        margin: '2% 0 0 0',
        border: '2px solid yellow',
        borderRadius: '15px'
    }
  

    
    //check for valid name

    function validFullname(){
        
        if(fullName.length == 0){
            setFullNameStyle({...yellowBorder})
            toast.warn(`Name Unchanged `, {
                position: toast.POSITION.TOP_RIGHT
            })  
            setFullNameIsValid(true)
        }
        else{
            setFullNameStyle({...greenBorder})
            toast.success(`Name Updated `, {
                position: toast.POSITION.TOP_RIGHT
            })
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

    
    //check for email

    function validEmail(){
        
        if(email.length == 0){
            setEmailStyle({...yellowBorder})
            toast.warn(`Email Unchanged `, {
                position: toast.POSITION.TOP_RIGHT
            })  
            setEmailIsValid(true)
        }
        else{
            setFullNameStyle({...greenBorder})
            toast.success(`Email Updated `, {
                position: toast.POSITION.TOP_RIGHT
            })
            setFullNameIsValid(true)
        }

    }



    //check for valid phone number    

    function validPhone(){

        if(phone.length == 0){
            setPhoneStyle({...yellowBorder})
            toast.warn(`Phone Number Unchanged `, {
                position: toast.POSITION.TOP_RIGHT
            })
            setPhoneIsValid(true)
        }
     
        else{
            if(validator.isNumeric(phone)){
                setPhoneStyle({...phoneStyle, border: '2px solid green'})
                setPhoneIsValid(true)
            }
            
            else{
                setPhoneStyle({...redBorder})
                
                toast.warn("Invalid Phone Number", {
                    position: toast.POSITION.TOP_RIGHT
                })
                setPhoneIsValid(false)
            }
    
        }
    }




    // Validation of the form
    
    const updateUserProfile = async (e) =>{

        e.preventDefault();
        validFullname();
        validEmail();
        validPhone();



        if (isfullNameValid  && isemailValid && isphoneValid  !== true) {
            toast.error("Please Enter Correct Information", {
                position: toast.POSITION.TOP_RIGHT
            });
            
        } 
        else {

            const res = await updateProfile ({
                _id: userInfo._id,
                fullName,
                phone, 
            
            }).unwrap();

            dispatch(setCredentials({...res}));
            toast.success("Profile Updated Successfully", {
                position: toast.POSITION.TOP_RIGHT
            }); 
        }  
    }
     
 




    return (


        <div className="main12">

            <div className='side-mobb'>
                <SideBar /> 
            </div>

            <div className='ham-mobb'>
                <ProfNavBar/>
            </div>
            
            <div className='Back12'>

                <form onSubmit={updateUserProfile} >

                    <div style={{display:'flex', justifyContent:'center'}}>
                        { isLoading && <Loader/> }
                    </div>

                    <div className="border2" >
                        <p>Full Name</p>
                        <CustomInput placeholder={userInfo.fullName} value= {fullName} style = {fullNameStyle}  onChange={onInputChange} />
                    </div>

                    <div className="border2" >
                        <p>Email</p>
                        <CustomInput type='email' placeholder= {userInfo.email}  style = {emailStyle} readOnly onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="border2">
                        <p>Phone Number</p>
                        <CustomInput  placeholder= {userInfo.phone} value= {phone} style = {phoneStyle}  onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="border2">
                        <CustomButton title={'Confirm Changes'} type='submit' style={{width:'100%', height:'60px',borderRadius:'5rem'}}/>
                    </div> 
                    
                </form>
            </div>
            

        </div>
            
    )
}

export default EditedProfile;
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import './ChangePassword.css'
import './EditedProfile.css'
import {useState} from 'react'
import { toast } from 'react-toastify';
import ProfNavBar from './ProfNavBar';
import SideBar from './SideBar';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'




function ChangePassword({API_URL}){

    const style = {width:'100%',height:'1rem', borderRadius:'1rem',border:' 2px solid black',padding:'1.5rem'}

    const [passStyle, setPassStyles] = useState({
        ...style
    })

    const [conPassStyle, setConPassStyles] = useState({
        ...style
    })

    const redBorder = {
        width:'100%',
        height:'1rem', 
        borderRadius:'1rem',
        padding:'1.5rem',
        border: '2px solid red'
    }

    const greenBorder = {
        width:'100%',
        height:'1rem', 
        borderRadius:'1rem',
        padding:'1.5rem',
        border: '2px solid green'
    }
   
    const[userPasswords,setUserPasswords] = useState({
        oldPassword:'',
        password:'',
        confirmPassword:''
    })

   
    const {password,confirmPassword} = userPasswords 
    
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

    function handleChangePassword(e){
        const {name,value} = e.target
        setUserPasswords(intialState => ({
            ...intialState,
            [name]:value
        }))

    }

    //let check = Object.is(password,confirmPassword)

    function handleNewpassword(e){
        const {name,value} = e.target
        setUserPasswords(intialState => ({
            ...intialState,
            [name]:value
        }))
        
        if(strongPassword.test(password)){
            setPassStyles({...greenBorder})
        }

        else{
            setPassStyles({...redBorder})
        }
    }
    


    function handleOnSubmit(e){
        e.preventDefault();

        if(password === confirmPassword){
            setConPassStyles({...greenBorder})
        }else{
            setConPassStyles({...redBorder})
        }

        if (password !== confirmPassword){
            return toast.warn("passwords don't match", {
              position: toast.POSITION.TOP_RIGHT
            })
        }

        const localdata = JSON.parse(localStorage.getItem('userData'))
        const userData = {
            userId: localdata._id,
            oldPassword: userPasswords.oldPassword,
            newPassword: userPasswords.password
        }
        //proceeed to fetch
        fetch(`${API_URL}/auth/changePassword`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        .then((response) => response.json())
        .then((data) => {
            if(data.success){
                toast.success(`${data.message}`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
            else{
                toast.error(`${data.message}`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
            
        })
            
        .catch(() => {
            toast.error("Server or Network Failure", {
                position: toast.POSITION.TOP_RIGHT
            })
        })
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

                <form onSubmit={handleOnSubmit}>

                    <div className="border2" >
                        <p>Enter Old Password</p>
                        <CustomInput type="password" name= 'oldPassword'   placeholder='XXXXXXXX' style={{...style}}
                        onChange={handleChangePassword}/>
                    </div>

                    <div className="border2" >
                        <p>Create New Password</p>
                        <CustomInput type="password" name = 'password'   placeholder='XXXXXXXX' style={{...passStyle}}
                        onChange={handleNewpassword}/>
                    </div>

                    <div className="border2">
                        <p>Re-Enter Password</p>
                        <CustomInput type="password" name= 'confirmPassword'  placeholder='XXXXXXXX'  style={conPassStyle}  onChange={handleChangePassword}/>
                    </div>
                    
                    <div className="border2">
                        <CustomButton title={'Confirm Password'} type='submit' style={{width:'100%', height:'60px',borderRadius:'1rem'}}/>
                    </div> 

                </form>

            </div>

        </div>
  
    )
}

export default ChangePassword;
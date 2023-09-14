import './EditedProfile.css'
import {useState} from 'react'
import { toast } from 'react-toastify'
import SideBar from './SideBar';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import ProfNavBar from './ProfNavBar';













// eslint-disable-next-line react/prop-types
function EditedProfile({API_URL}) {
   
    const[userEditedProfile, setUserEditedprofile] = useState({
        fullName:'',
        phoneNumber:''
    })

    const [localStorageData,setLocalStorageData] = useState({})

    // useEffect(()=>{
    //     //COLLECTING THE DATA FROM LOCAL STORAGE AND CONVERTING TO AN OBJECT
    //     const stData = JSON.parse(localStorage.getItem('userData'))
        
    //     //SETTING THE DATE COLLECTED INTO THIS STATE
    //     setLocalStorageData(stData)
    //     const {fullName,phoneNumber,email} = stData
    //     setUserEditedprofile(
    //         (initialprofile) =>(
    //             {
    //                 ...initialprofile,
    //                 fullName:fullName,
    //                 email:email,
    //                 phoneNumber:phoneNumber
    //             }
    //         )
    //     )
    // },[])
    
    
    
    // const navigate = useNavigate()
    function updateEditedprofile(e){
        const {name, value} = e.target
        setUserEditedprofile(initialEdit => ({
            ...initialEdit, [name]:value
        }))
    }



    function handleSubmit(e){
        //to prevent refreshing of page after submitting
        e.preventDefault()
        // console.log(userEditedProfile)

        const{fullName,phoneNumber} = userEditedProfile

        if(fullName.trim() === '' || phoneNumber.trim() === ''){
            return  toast.warn(`you cannot use empty space`, {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        const newData = localStorageData
        newData.fullName = fullName
        newData.phoneNumber = phoneNumber

        setLocalStorageData(initialLC => ({
            ...initialLC,
            fullName:fullName,
            phoneNumber:phoneNumber
        }))

        localStorage.setItem('userData',JSON.stringify(newData))

        fetch(`${API_URL}/auth/user/updateprofile/${localStorageData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userEditedProfile),
        })
        
        .then((response) => response.json())
        .then((data) => {
            if(data.success){
                console.log(data)
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
        
        .catch(() => toast.error(`Server error`, {
            position: toast.POSITION.TOP_RIGHT
        }))
    
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

                <form onSubmit={handleSubmit} >
        
                    <div className="border2" >
                        <p>Fullname</p>
                        <CustomInput placeholder='e.g  Achilihu Daniel Uchenna' name="fullName" style={{width:'100%',height:'1rem', borderRadius:'1rem',border:' 2px solid black',padding:'1.5rem'}} value={userEditedProfile.fullName} onChange = {updateEditedprofile} />
                    </div>

                    <div className="border2">
                        <p>Phone number</p>
                        <CustomInput  placeholder='e.g  09037231624' name="phoneNumber"  style={{width:'100%',height:'1rem', borderRadius:'1rem',border:' 2px solid black',padding:'1.5rem'}} value ={userEditedProfile.phoneNumber}  onChange = {updateEditedprofile}/>
                    </div>

                    <div className="border2">
                        <CustomButton title={'Confirm Changes'} type='submit' style={{width:'100%', height:'60px',borderRadius:'5rem'}}/>
                    </div> 
                    
                </form>
            </div>
            

        </div>
            
    )
}

export default EditedProfile
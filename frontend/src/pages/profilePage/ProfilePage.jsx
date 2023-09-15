import'./ProfilePage.css';
import SideBar from './SideBar';
import { useSelector } from 'react-redux';
import {IdentificationBadge,Envelope,Phone,User} from "phosphor-react";
import ProfNavBar from './ProfNavBar';

    



function ProfilePage() {

    // Declaration of Variables
    const { userInfo } = useSelector((state) => state.auth)
    



    return (

        <div className="Profile-con">

            <div className='side-mobb'>
                <SideBar /> 
            </div>

            <div className='ham-mobb'>
                <ProfNavBar/>
            </div>
            
            
            <div className=" Profile-main"> 

            
                <div className='Profile'>  
                    <div className='profile-img'>
                        <User size={85} weight="thin" />
                    </div>

                    <div className=" profile-border" >
                        <IdentificationBadge className='p-icons' size={28} weight="thin" />
                        <h5>Fullname:</h5>
                        <p className='p-details'>{userInfo.fullName}</p>
                    </div>

                    <div className=" profile-border" >
                        <IdentificationBadge className='p-icons' size={28} weight="thin" />
                        <h5>Username:</h5>
                        <p className='p-details'>{userInfo.userName}</p>
                    </div>

                    <div className=" profile-border">
                        <Envelope className='p-icons'  size={28} weight="thin" />
                        <h5>Email:</h5>
                        <p className='p-details'>{userInfo.email}</p>
                    </div>
                    
                    <div className=" profile-border">
                        <Phone className='p-icons'  size={28} weight="thin" />
                        <h5>Phone number:</h5>
                        <p className='p-details'>{userInfo.phone}</p>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default ProfilePage;
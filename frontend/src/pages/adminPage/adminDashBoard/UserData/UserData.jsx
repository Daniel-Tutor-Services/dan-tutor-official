import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './UserData.css'
function UserData( {fullName, email, phoneNumber, isAdmin}) {
  return (
    <div className="userdata">
        <div className="userdataDes">
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{isAdmin ? "Admin" : "Not Admin"}</p>
            <div className="userdataBtn">
            {/* <CustomButton title='EDIT' 
                style={{
                    background: '#151D3B',
                    color: 'white',
                    padding: "8px 10px",
                    borderRadius: '8px',
                    width: '80px',
                    fontSize: '10px'
                }} /> */}
            </div>
        </div>
    </div>
                        
  )
}

export default UserData
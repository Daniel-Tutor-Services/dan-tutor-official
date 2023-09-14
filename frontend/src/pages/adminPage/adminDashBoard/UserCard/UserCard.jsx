import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import CustomToast from '../../../../components/customToast/CustomToast'
import './UserCard.css'

function Outline({title, user, currentUser, deleteUser, ...otherProps}) {
    const toastStyle={
        marginRight: '20px',
        background: '#151D3B',
        color: 'white',
        padding: "8px 10px",
        borderRadius: '8px',
        width: '90px',
        textAlign: 'center'
    }
    function handleDeleteUser(_id){
        if(!window.confirm("Are you sure you want to delete this user?")) return;
        deleteUser(_id)
    }
  return (
    <div className="usercard"
    style={{
        boxShadow: currentUser._id === user._id ? "rgba(0, 0, 0, 0.65) 0px 5px 50px" : "",
    }}
    {...otherProps}>
        <p>{title}</p>
        <div className="usercardBtns">
        {/* <CustomToast content="user deleted sucessfully" status='success' title='DELETE' style={toastStyle} payload={handleDeleteUser}/> */}
           
           <CustomButton title='DELETE' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: "8px 10px",
                borderRadius: '8px',
                width: '90px',
                textAlign: 'center'
            }}
            onClick={() => { handleDeleteUser(user._id) }}
            />
        </div>
    </div>
    )
}

export default Outline
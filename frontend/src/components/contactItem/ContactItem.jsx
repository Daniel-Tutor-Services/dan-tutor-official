/* eslint-disable react/prop-types */

// import { resolvePath } from 'react-router-dom';
// import CustomButton from '../customButton/CustomButton';

import './ContactItem.css'
// eslint-disable-next-line react/prop-types



// eslint-disable-next-line no-unused-vars
function ContactItem({ msg, index, API_URL, getMessages }) {

    async function resolve(messageId){
        let response = await fetch(`${API_URL}/api/message/resolve`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ messageId: messageId })
        });

        response = await response.json();
        // alert(response.message);
        if (response.success) getMessages();
    }




    return (
        <div className='contact-rex'>

            <div className='contact-list'>

                <ul>
                    <li className='item'>No:</li>
                    <li className='item'>Name:</li>
                    <li className='item'>Phone Number:</li>
                    <li className='item'>E-mail:</li>
                    <li className='item'>Message:</li>
                    {/* <li className='item-sent'>Time Sent</li> */}
                </ul>

            </div>

            <div className='contact-details'>
                <p className="serial-no item">{index}</p>

                <div className='contact-name-item' >
                    <p>{msg.name}</p>
                </div>

                <div className='contact-number-item'>
                    <p>{msg.phone}</p>
                </div>

                <div className='contact-mail-item'>{msg.email}</div>
                <div className='contact-message-item'> <p>{msg.message}</p> </div>
                <div className='contact-time-item'> <p>Time Sent: </p><p>{msg.createdAt}</p> </div>
                {/* <div className="item">
                <CustomButton title='x' style={{backgroundColor:'#202c46', color:'white', height: '5vh', padding: '0px', boxShadow: 'none'}}/>
                </div> */}
            </div>
            
            {
                msg.resolved === true ? 
                <p style={{ height: "30px", color: "white", backgroundColor: "green", borderRadius: "20px", marginLeft: "auto", padding: "5px", textAlign: "center" }}>
                Resolved
                </p> 
                : 
                // eslint-disable-next-line no-undef
                <p style={{ height: "60px", backgroundColor: "transparent", borderRadius: "20px", border: "1px solid black", marginLeft: "auto", padding: "5px", textAlign: "center", cursor: "pointer" }} onClick={() => { resolve(msg._id) }} >
                    Mark as resolved
                </p>
            }

        </div>
    )
}

export default ContactItem;
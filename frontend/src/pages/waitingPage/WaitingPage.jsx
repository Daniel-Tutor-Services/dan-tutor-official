import './WaitingPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import waiting from '../../assets/waitingPage/waiting1.png';


function WaitingPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
        navigate('/success-page')
        }, 5000)
    },[navigate])




    return (
        <div className='waiting-page'>
            <div className="waiting-body">
                <div className="waiting-text">
                    <h1>Waiting...</h1>
                    
                    <p>Thank you for choosing <b>DAN-TUTOR</b> as your learning companion. Let us learn, grow, and achieve together!</p>

                    <p>Please, Wait! This wont take long.</p>
                </div>
                
                <div className="waiting-img">
                    <img src={waiting} alt="waiting" className='waiting-pic'/>
                </div>

            </div>
            
        </div>
    )
}

export default WaitingPage;
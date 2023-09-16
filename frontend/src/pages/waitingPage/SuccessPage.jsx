import './WaitingPage.css';
import { Link } from "react-router-dom";
import CustomButton from '../../components/customButton/CustomButton';
import success from '../../assets/waitingPage/success-removebg-preview .png';




function SuccessPage() {

    return (

        <div className='waiting-page'>

            <div className="waiting-body">

                <div className="waiting-text">
                    <h1 style={{color:'green'}}>Successful !!</h1>

                    <Link to='/' className="links">
                        <CustomButton title='Proceed to log in'style={{ 
                            marginBottom: "10px",
                            padding: "10px 5px",
                            display:"block",
                            width:'220px',
                            color:'white'
                        }}/>

                    </Link>
                </div>

                <div className="waiting-img">
                    <img src={success} alt="waiting" className='waiting-pic'/>
                </div>

            </div>

        </div>
    )
}

export default SuccessPage;
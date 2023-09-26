import './SuccessPage.css';
import { Link } from "react-router-dom";
import CustomButton from '../../components/customButton/CustomButton';
import success from '../../assets/waitingPage/success-removebg-preview .png';




function SuccessPage() {

    return (

        <div className='waiting-page2'>

            <div className="waiting-body2">

                <div className="waiting-text2">
                    <h2 style={{color:'green', fontSize:'1.5rem'}}>Successful !!</h2>

                    <Link to='/' className="links">
                        <CustomButton title='Proceed to log in' style={{width:'200px'}}/>

                    </Link>
                </div>

                <div className="waiting-img2">
                    <img src={success} alt="waiting" className='waiting-pic2'/>
                </div>

            </div>

        </div>
    )
}

export default SuccessPage;
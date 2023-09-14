import './ErrorPage.css';
import { Link } from "react-router-dom";
import dtlogo from '../../assets/dtlogo.png';




function ErrorPage() {
    
    return (

        <div className='errorbody'>
            <div className='errorlogo'>
                <Link to='/' className='links'>
                    <img src={dtlogo} alt="dtlogo" style={{width:'170px', height:'10%', padding:'5px 5px'}}/>
                </Link>
            </div>

            <div className="errortext">
                <p> <span>404</span> </p>
                <p>Sorry, Page Not Found!</p>
            </div>

        </div>
    )
}

export default ErrorPage;
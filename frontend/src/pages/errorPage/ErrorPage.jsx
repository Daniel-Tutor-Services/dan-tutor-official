import './ErrorPage.css';
import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import dtlogo from '../../assets/dtlogo.png';




function ErrorPage() {

    
	function goBackAndRefresh() {
        window.history.go(-1);
    }

		
    
    return (

        <div className='errorbody'>
            <div className='errorlogo'>

                <div>
                    <BiArrowBack onClick={goBackAndRefresh} style={{cursor: 'pointer',display:'flex', justifyContent:'start'}} color='white' size={30}/>
                </div>

                <Link to='/' className='links'>
                    <img src={dtlogo} alt="dtlogo" style={{width:'170px', height:'170px', padding:'5px 5px'}}/>
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
import './ErrorPage.css';
import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import dtlogo from '../../assets/dtlogo2.png';




function ErrorPage() {

    
	function goBackAndRefresh() {
        window.history.go(-1);
    }

		
    
    return (

        <div className='errorbody'>
            <div className='errorlogo'>

                <div  style={{cursor: 'pointer',display:'flex', alignItems:'center', color:'white'}} >
                    <BiArrowBack onClick={goBackAndRefresh} style={{cursor: 'pointer',display:'flex', marginRight:'10px', justifyContent:'start'}} color='white' size={30}/>  Back
                </div>

            </div>
        
            <div style={{display:'flex', justifyContent:'center'}}>

                <Link to='/' className='links'>
                    <img src={dtlogo} alt="dtlogo" style={{width:'200px', height:'150px'}}/>
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
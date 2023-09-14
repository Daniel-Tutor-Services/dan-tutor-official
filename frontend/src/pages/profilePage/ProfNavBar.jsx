import '../homePage/NavBar.css';
import {  Link} from 'react-router-dom';
import dtlogo from '../../assets/dtlogo.png';
import ProfHamburger from './ProfHamburger.jsx';



function ProfNavBar() {

    return (

        <div className='nav-barr'>
            
            <div className='dtlogo'>
                <Link to='/' className='links' id='dtlogg'>
                    <img src={dtlogo} alt="dtlogo" />
                </Link>
            </div>


            <div className='home-mobb'>
                <ProfHamburger/>
            </div>
            
        </div>
    )
}

export default ProfNavBar;
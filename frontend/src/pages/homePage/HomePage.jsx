import './HomePage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import video from '../../assets/dtvideo.mp4';
import CustomButton from '../../components/customButton/CustomButton';

    
    


function HomePage() {

    const { userInfo } = useSelector((state) => state.auth)



    

    return (

        <div className='homepagebody'>

            <NavBar />
            
            <div className='homepg'>
                
                <div className='display-item'>
                
                    <div className='home-text'>

                        <h1>DAN-TUTOR</h1>

                        {
                            userInfo ?
                            (
                                <p>Welcome back to <b>  DAN-TUTOR  </b> E-learning platform! Click to continue learning a course.</p>
                            )
                            :
                            (
                                <p>Welcome to <b>DAN-TUTOR </b> E-learning platform! Get started with us by learning a new course.</p>
                            )
                        }



                        <div className='home-button'>
                            {
                                userInfo ?

                                (
                                    <Link to='/dash-board'>
                                        <CustomButton title="SEE COURSES" style={{width:'200px', height:'50px', padding:'1rem',color:'white',  fontSize:'.7rem'}}/>
                                    </Link>
                                )
                                :
                                (
                                    <Link to='/signup'>
                                        <CustomButton title="GET STARTED" style={{width:'200px', height:'50px', padding:'1rem',color:'white',  fontSize:'.7rem'}}/>
                                    </Link>
                                )
                            }
                        
                        </div>

                    </div>
                        
                    <div className='mockpix'>
                        <video src={video}  alt="logo" width={450} muted autoPlay loop/>            
                    </div>

                </div>
                
                <div className='shapedividers_com-6246'>
                
                </div>

            </div>

        </div>
    )
}

export default HomePage;
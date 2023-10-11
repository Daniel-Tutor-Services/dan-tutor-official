import './AboutPage.css';
import { Link } from "react-router-dom";
import csa from "./aboutAssets/csa.png";
import caw from "./aboutAssets/caw.png";
import tr from "./aboutAssets/tr.png";
import NavBar from '../homePage/NavBar';
import StaffPage from './StaffPage.jsx';
import CustomButton from '../../components/customButton/CustomButton.jsx';






function AboutPage() {

    return (
    
        <div className='about-us-page'>
                
            <NavBar/>

            <div className="aboutus-info">

                <div className='aboutus-details'>

                    <h1>About Us </h1> 
        
                    <p>
                        Welcome to <b>DAN-TUTOR</b> E-learning Platform, your online destination for interactive and engaging learning experiences. Our mission is to make education accessible to everyone, breaking down barriers and revolutionizing the way we learn. With a passion for learning and technology, our team has come together to create a platform that empowers learners of all ages and backgrounds to achieve their goals.
                    </p>

                    <h1>Our Vision</h1>

                    <p>
                        At <b>DAN-TUTOR</b>, we envision a world where knowledge knows no bounds. We believe in leveraging the power of technology to bring education to your fingertips, making it convenient, affordable, and effective. Our vision is to foster a global community of learners who are curious, motivated, and inspired to explore a wide range of subjects.
                    </p>


                    <div className = "staff-btn">                      
                        <Link to='/contactus' pathname='/contactus'>
                        
                            <CustomButton title="KNOW MORE" style={{width:'200px', height:'50px', padding:'1rem',color:'white', fontSize:'.7rem'}}/>
                
                        </Link>

                    </div>

                </div>
                
            </div>

            <div className='why-choose-us'>
                <div className='why-choose-us-info'>
                    
                    <h1> Why Choose Us</h1>

                    <p>
                        <li>  <b style={{color:'black'}}> Diverse Course Catalog: </b> Our platform hosts a diverse range of courses, spanning from academic subjects to practical skills, taught by experts in their respective fields.</li> <br />

                        <li> <b style={{color:'black'}}>Interactive Learning: </b>  We believe in the power of interactive learning. Our courses are designed to keep you engaged with quizzes, assignments, discussions, and hands-on activities.</li><br />

                        <li> <b style={{color:'black'}}>Flexibility: </b> Learning should fit into your schedule. Our on-demand courses allow you to learn at your own pace, anytime and anywhere.</li><br />

                        <li> <b style={{color:'black'}}>Community: </b>  Connect with fellow learners, collaborate on projects, and share insights in our vibrant online community. Learning is a social experience, and we are here to facilitate connections.</li>
                    </p>


                    <div className='cl-aw-tr'>

                        <div className='c-a-t'>
                            <div className='client-sat'>
                                <img src={csa} alt="" />
                                <h4>CLIENT SATISFACTION</h4>
                            </div>

                            <h3>CLIENT SATISFACTION</h3>
                        
                        </div>

                        <div className='c-a-t'>
                            <div className='award'>                            
                                <img src={caw} alt="" />
                                <h4>CERTIFICATE AWARD</h4>
                            </div>

                            <h3>CERTIFICATE AWARD</h3>
                        
                        </div>

                        <div className='c-a-t'>
                            <div className='trustable'>
                                <img src={tr} alt="" />
                                <h4>TRUSTABLE</h4>
                            </div>
                        
                            <h3>TRUSTABLE</h3>
                        
                        </div>


                    </div>

                </div>

            </div>

            <div className='meet-the-team'>

                <h1>Our Expect Team</h1>

                <p>We are a dedicated team of educators, technologists, designers, and visionaries who are passionate about education and its transformational potential. Our combined expertise allows us to create an exceptional learning environment that caters to different learning styles and preferences. </p>

                <StaffPage/>
                
            </div>

        </div>
    )
}

export default AboutPage;
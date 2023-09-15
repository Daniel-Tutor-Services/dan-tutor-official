import './DashBoard.css'
import { useSelector } from 'react-redux';
import NavBar from '../homePage/NavBar';
import CourseMaterials from '../courseOutline/CourseMaterials';
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton';







function DashBoard() {
    
    const { userInfo } = useSelector((state) => state.auth)



    return (
        <div className='dashcontainer'>

            <NavBar/>
            
            <div className='dashcustominput'>
                
                <form className='dashindiv'>
                    <CustomInput placeholder="Find a course" className="dashinput" type= 'search' style={{width:'400px',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}} />

                    <CustomButton title="Search" className="dashbet" style={{width:'130px', height:'50px', padding:'5px 0px', margin:'10px 0px', borderRadius:'30px', fontFamily:'BioRhyme, serif'}} type='submit' />
                </form>

                <form className='dashindiv-mob' >
                    <CustomInput placeholder="Find a course" className="dashinput" type= 'search' style={{width:'200px',height:'45px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}/>
                    
                    <CustomButton title="search" className="dashbet" style={{width:'100px', height:'43px', borderRadius:'30px',  padding:'5px 0px', margin:'10px 0px', fontFamily:'BioRhyme, serif'}} type='submit' />
                </form>

            </div>

     


            <div className='course-outlines'>

                {
                    userInfo ? 
                    (
                        <div >
                            <br/>
                                <marquee direction="right">
                                    <h3 style={{fontSize:'1.1em', color:'darkblue', marginLeft:'10px'}}>{`Welcome,  ${userInfo.fullName}`}</h3> 
                                </marquee>
                            <br/>

                            <p id='availcours' style={{textAlign:'center'}}>Here are the lists of courses avaialble. Click to see topics. </p>

                            <CourseMaterials/>
                        </div>
                        
                    )
                    :
                    (
                        <div className='titlediv'>
                            <h1>All Courses</h1>
                            <marquee direction="right"> 
                                <h3>  Please Login / Sign up to view our course outlines. </h3>
                            </marquee>

                        </div>                 
                    )
                }
            </div>

        </div>
    )
}

export default DashBoard;


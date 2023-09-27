import './DashBoard.css'
import '../courseOutline/CourseMaterials.css';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavBar from '../homePage/NavBar';
import { useSelector } from 'react-redux';
import CustomButton from '../../components/customButton/CustomButton';







function DashBoard() {
    
    const { userInfo } = useSelector((state) => state.auth)

    function ScrollToTop() {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', 
          });
        }, [pathname]);
      
        return null;
    }

    function searchCourses(e) {
        e. preventDefault()
        let input = document.getElementById('searchbar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('courses');
        let i =0
        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="grid";				
            }
        }
    }




    return (
        <div className='dashcontainer'>

            <NavBar/>
            
            <div className='dashcustominput'>
                
                <form className='dashindiv'>
                    <input id="searchbar"  type="text"  name="search"  placeholder="Find a course" className="dashinput"  style={{width:'100%',height:'52px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}}  />

                    <CustomButton title="Search" className="dashbet" style={{width:'130px', height:'50px', padding:'5px 0px', margin:'10px 0px', borderRadius:'30px', fontFamily:'BioRhyme, serif'}} type='submit' onClick={searchCourses} />
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

                            <div>
            
                                <NavBar/>

                                <div className='gen-course-mat'>     

                                    <NavLink to='/course-english-language' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p >ENGLISH LANGUAGE</p></div>
                                    </NavLink>

                                    <NavLink to='/course-mathematics' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>MATHEMATICS</p></div>
                                    </NavLink>


                                    <NavLink to='/course-physics' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>PHYSICS</p></div>
                                    </NavLink>

                                    <NavLink to='/course-chemistry' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>CHEMISTRY</p></div>
                                    </NavLink>
                                    
                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>FRENCH LANGUAGE</p></div>
                                    </NavLink>


                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p className="courses">BIOLOGY</p></div>
                                    </NavLink>


                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p className="courses">COMPUTER SCIENCE</p></div>
                                    </NavLink>


                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>AGRICULTURAL SCIENCE</p></div>
                                    </NavLink>


                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>ECONOMICS</p></div>
                                    </NavLink>


                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>GEOGRAPHY</p></div>
                                    </NavLink>


                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>CIVIC EDUCATION</p></div>
                                    </NavLink>


                                    <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                                        <div className="courses"><p>GOVERNMENT</p></div>
                                    </NavLink>

                                </div>

                             </div>

                        </div>
                        
                    )
                    :
                    (
                        <div className='titlediv'>
                            <h1>All Courses</h1>
                            <marquee direction="left"> 
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


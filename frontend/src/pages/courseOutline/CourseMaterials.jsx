import './CourseMaterials.css';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavBar from '../homePage/NavBar';






function CourseMaterials() {

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





    return(

        <div>
            
            <NavBar/>

            <div className='gen-course-mat'>     

                <NavLink to='/course-english-language' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>ENGLISH LANGUAGE</p></div>
                </NavLink>

                <NavLink to='/course-mathematics' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>MATHEMATICS</p></div>
                </NavLink>

                <NavLink to='/course-chemistry' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>CHEMISTRY</p></div>
                </NavLink>

                <NavLink to='/course-physics' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>PHYSICS</p></div>
                </NavLink>

                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>FRENCH LANGUAGE</p></div>
                </NavLink>


                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>BIOLOGY</p></div>
                </NavLink>


                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>COMPUTER SCIENCE</p></div>
                </NavLink>


                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>AGRICULTURAL SCIENCE</p></div>
                </NavLink>


                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>ECONOMICS</p></div>
                </NavLink>


                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>GEOGRAPHY</p></div>
                </NavLink>


                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>CIVIC EDUCATION</p></div>
                </NavLink>


                <NavLink to='/course-' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>GOVERNMENT</p></div>
                </NavLink>

            </div>

        </div>
    )
}

export default CourseMaterials;
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


                <NavLink to='/course-mathematics' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>MATHEMATICS</p></div>
                </NavLink>

                <NavLink to='/course-english-language' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>ENGLISH LANGUAGE</p></div>
                </NavLink>

                <NavLink to='/course-chemistry' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>CHEMISTRY</p></div>
                </NavLink>

                <NavLink to='/course-physics' className='links' activeStyle={{color: "red"}} onFocus={ScrollToTop()} >        
                    <div><p>PHYSICS</p></div>
                </NavLink>


                <div><p>FRENCH LANGUAGE</p></div>


                <div><p>BIOLOGY</p></div>


                <div><p>COMPUTER SCIENCE</p></div>


                <div><p>AGRICULTURAL SCIENCE</p></div>


                <div><p>ECONOMICS</p></div>


                <div><p>GEOGRAPHY</p></div>


                <div><p>CIVIC EDUCATION</p></div>


                <div><p>GOVERNMENT</p></div>

            </div>

        </div>
    )
}

export default CourseMaterials;
import './TermsOfUse.css';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import dtlogo from '../../../assets/dtlogo.png';


function TermsOfUse() {

    function ScrollToTop() {
        const { className } = useLocation();
      
        useEffect(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', 
          });
        }, [className]);
      
        return null;
    }



    return (

        <div className='termspage'>
                
            <div className='termshead'>
                <div className='termsheadpic'>
                    <Link to='/' className='links'>
                        <img src={dtlogo} alt="dtlogo" style={{width:'150px'}}/>
                    </Link>
                </div>

                <Link to= '/'>
                    <BiArrowBack color='white' size={40}/>
                </Link>


                <div className='termsheader'>                    
                    <h1>TERMS OF USE</h1>

                </div>
                
            </div>
                
                
            <div className='terms' onChange={ScrollToTop()} >
                <p>
                    Our Terms of use was last updated on the  <b><i>7th of September, 2023. </i> </b> 
                    Your access to and use of the Service is also conditioned on your acceptance of and compliance with these Terms of Use. Please read this <b>DAN-TUTOR </b> Terms of Use carefully.
                </p>

                <p>
                    <b>DAN-TUTOR</b> runs a Non-Discrimination Policy. It does not discriminate in admissions, employment, or in any of its educational programs or activities on the basis of race, color, national or ethnic origin, ancestry, age, religion or religious creed, disability or handicap, sex or gender.
                </p>

                <p>
                    Your access to and use of the Service is also conditioned on Your acceptance of and compliance with these Terms of Use. These terms of Use apply to all visitors, users and others who access or use the Service.
                </p>

                <p>
                    By accessing or using the service you agree to be bound by these Terms of Use. If you disagree with any part of these Terms of Use then you may not access the Service.
                </p>

                <p>
                    As a condition for using the Service(s), you agree that you have read, understood and accepted <b>DAN-TUTOR</b> Terms of Use, which may be updated from time to time. After notice of a change to the privacy policy, continued use of the web application(s) will be deemed acceptance of the policy.
                </p>

                <p>
                    To access the <b>DAN-TUTOR</b> e-learning paltform, you must attest that you have read and agree to the terms and conditions contained in this <b>DAN-TUTOR</b> Terms of Use. The term “e-learning” includes the outlines, Web pages, courses and all associated materials.
                </p>

                <p>
                    All <b>DAN-TUTOR</b> e-learning outlines and materials, along with references used in or related to the e-learning, are the property of the Joe-Dan Gold Technologies or of third parties and used under permission granted to the establishment and may only be used in the manner detailed in this <b>DAN-TUTOR</b> Terms of Use.
                </p>

                <p>
                    We reserve the right to modify these Terms of Use at any time and in our sole discretion without prior notice.
                </p>

            </div>
            
        </div>
    )
}

export default TermsOfUse;
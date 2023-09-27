import './PrivacyPolicy.css';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import dtlogo from '../../../assets/dtlogo.png';


function PrivacyPolicy() {
    
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
        <div className='policy-page' onChange={ScrollToTop()} >

            <div className='policyhead'>

                <div className='policyheadpic'>
                    <Link to='/' className='links'>
                        <img src={dtlogo} alt="dtlogo" style={{width:'180px'}}/>
                    </Link>

                </div>

                <Link to= '/'>
                    <BiArrowBack color='white' size={40}/>
                </Link>
                
                <div className='policyheader'>         
                    <h1>PRIVACY POLICY</h1>
                </div>

            </div>

            <div className='policy' >
                <p>
                    This <b>DAN-TUTOR</b> privacy policy collects, uses, consults or otherwise processes an individuals Personal Data. For the purposes of this policy, Please refer to DAN-TUTOR SERVICES, an e-learning platform having its courses online. In all cases described in this Policy, <b>DAN-TUTOR</b> will process your personal data as a data Controller. Please take a moment to read this Privacy Policy carefully.
                </p>

                <p>
                    We are committed to protecting the privacy of our users and customers. This Privacy Policy is especially directed at:
                </p>

                <ul>
                    <li>visitors and subscribers of this e-learning platform;</li>
                    <li>natural persons contacting us through the contact or other forms available on the platform;</li>
                    <li> subscribers to our newsletter(s);</li>
                    <li>users signing in to use our services;</li>
                    <li>users signing in to download Free eBooks;</li>
                    <li>users signing in to attend and/or watch webinars;</li>
                </ul>

                <p>
                    This Privacy Policy is intended to inform you how we gather, define, and use information that could identify you, such as your name, email address, address, other contact details, online identifiers or other information that you provide to us when using our websites or when relying on our services. 
                </p> 

                <p>
                    Your personal data is created, stored and transmitted in a variety of paper and electronic formats, including databases at <b>DAN-TUTOR</b>. It is DAN-TUTOR SERVICES policy to limit access to and the use of your personal data to staff, faculty and authorized affiliates who have a legitimate interest in it for the purpose of carrying out their professional and contractual duties.
                </p>

                <p>
                    Your personal data relating to your <b>DAN-TUTOR</b> study program will be used, shared and otherwise processed by staff, faculty, and other persons directly associated with the program, as well as other educational offices whose services support study abroad programs, including the Offices in the Federation.
                </p>

                <p>
                    The program will also share your personal data with your school or prospective employer, and other <b>DAN-TUTOR</b> departments as part of your profile, and for a variety of other academic, educational, administrative, research and statistical purposes.
                </p>

            </div>

        </div>
    )
}
  
export default PrivacyPolicy;
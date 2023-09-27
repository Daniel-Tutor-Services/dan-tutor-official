/* eslint-disable no-mixed-spaces-and-tabs */
import './ContactPage.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import {  useDispatch, useSelector } from 'react-redux';
import { setMessagex } from '../../slices/authSlice';
import {  useContactUsMutation } from '../../slices/usersApiSlice'
import { MapPin, Phone, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import img from '../../assets/image4.jpg';
import dtlogo from '../../assets/dtlogo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import Loader from '../../components/loader/Loader';




function ContactPage () {

	const [fullName, setFullName] = useState ('');
    const [email, setEmail] = useState ('');
    const [phone, setPhone] = useState ('');
    const [message, setMessage] = useState ('');


	const dispatch = useDispatch(); 
	const { userInfo } = useSelector ((state) => state.auth);   
	const [contactus, {isLoading} ] = useContactUsMutation();



	// Validation for message input


	const newMessage= async (e) =>{

		e.preventDefault();

		if (message.length === 0) {

			toast.error("Something went wrong, Please try again", {
				position: toast.POSITION.TOP_RIGHT
			});
		} 
		

		else {
            try {
				const res = await contactus ({fullName, phone, email, message}).unwrap();
                dispatch(setMessagex({...res}));
                toast.success("Message sent successfully", {
                    position: toast.POSITION.TOP_RIGHT
                }); 
            }   
            
            catch (err) {
                toast.error(err?.data.message || err.error);        
            }
        }
	}


		


    return (

		<div className="smallContc">

			<form className='formc' onSubmit={newMessage}>


			{ isLoading && <Loader/> }


				<div className="colc">

					<div>
						<Link to= '/'>
    	                	<BiArrowBack color='white' size={30}/>
	                	</Link>
					</div>
					

					<div>

						<Link to='/' className='links'>
							<img src={dtlogo} alt="dtlogo" className="img"  style={{width:'150px'}} />          
						</Link>
					</div>

		
								

					<h2>Send Us A Message</h2>

					{ userInfo ? 

						(
							<>
								<CustomInput placeholder={userInfo.fullName}  style = {{width: '100%'}}  value= {fullName}  onChange={() => setFullName (userInfo.fullName)}/>
								<CustomInput placeholder= {userInfo.email} style = {{width: '100%'}}  value= {email} onChange={() => setEmail (userInfo.email)}  />
								<CustomInput placeholder= {userInfo.phone} style = {{width: '100%'}}  value= {phone}  onChange={() => setPhone (userInfo.phone)}  />
							</>
						)
						
						:
						
						( 
							<>
								<CustomInput placeholder= 'Full Name*' style = {{width: '100%'}}  value= {fullName}  onChange={(e) => setFullName (e.target.value)} />		
								<CustomInput placeholder= 'Email Address*' style = {{width: '100%'}}  value= {email}  onChange={(e) => setEmail (e.target.value)} />
								<CustomInput placeholder= 'Phone Number*' style = {{width: '100%'}}  value= {phone}  onChange={(e) => setPhone (e.target.value)} />		
							</>
						)	
					}
					
					
					<textarea placeholder="Write us a message" cols="20" rows="4" value={message} id="textc" minLength={10} onChange={(e) => setMessage (e.target.value)} ></textarea>
					
					<CustomButton title = 'SUBMIT' style = {{width: '100%', margin: '8px 0% 0'}} />

				</div>

			</form>


			<div className="col-2c">
				<img src={img} alt = 'learning' />

				<div className="absc">
					<h1 style={{textAlign: 'left', marginTop: '12%'}}>Contact Us</h1>

					<div className="groupc" style={{margin: '80px 0 0'}}>
						<MapPin size={32} />  
						<span>Address</span>
					</div>
					
					<span className="movec">Afe Babalola University Post Graduate School, <br/>  Ado Ekiti, Ekiti State, Nigeria.</span><br /><br />
					
					<div className="groupc">
						<Phone size={32} /> 
						<span> Let Talk</span>
					</div>
					
					<span className="movec">09037231624 or 09035007117</span><br /><br />
					
					<div className="groupc">
						<EnvelopeSimple size={32} />
						<span>General Support</span>
					</div>
					
					<span className="movec">achilihudaniel53@gmail.com</span>
					
					<br/>
					<br/>

					<div className="groupc2">
						<a href="https://www.facebook.com/daniel.achilihu.9"><p><FacebookLogo size={37} className = 'bluei' /></p></a>
						<a href="https://www.linkedin.com/in/daniel-achilihu-633161150/"><p><LinkedinLogo size={37} className = 'bluei' /></p></a>
						<a href="https://www.instagram.com/dan__kesh77/"><p><InstagramLogo size={37} className = 'pinki'  /></p></a>
					</div>

				</div>

			</div>

		</div>  
    )
}

export default ContactPage;
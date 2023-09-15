import './ContactPage.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { MapPin, Phone, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import img from '../../assets/image4.jpg';
import { setCredentials } from '../../slices/authSlice';
import {  useDispatch, useSelector } from 'react-redux';
import {  useContactUsMutation } from '../../slices/usersApiSlice'
import dtlogo from '../../assets/dtlogo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import Loader from '../../components/loader/Loader';




function ContactPage () {

    const [message, setMessage] = useState ('');
    
	const dispatch = useDispatch();
    
	const { userInfo } = useSelector ((state) => state.auth);
    
	const [contactus, {isLoading} ] = useContactUsMutation();
	
	const [ismessageValid, setMessageIsValid] = useState(false);
	

	function validMessage(){
        if(message.length !== 0){
			setMessageIsValid(true)
        }
        
        else{	
			toast.warn("Please Input A Message ", {
				position: toast.POSITION.TOP_RIGHT
            })
			setMessageIsValid(false)			
		}

	}


	const newMessage= async (e) =>{

		e.preventDefault();
		validMessage();	



		if (ismessageValid  == true) {
			toast.warn("Something went wrong, Please Try again", {
				position: toast.POSITION.TOP_RIGHT
			});
		} 
		

		else {
			try {
				const res = await contactus ({message}).unwrap();
				dispatch(setCredentials({...res}));
				toast.success("Message Sent Sucessfully", {
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
					<Link to='/' className='links'>
						<img src={dtlogo} alt="dtlogo" className="img"  style={{width:'150px'}}/>          
					</Link>

					<h2>Send Us A Message</h2>
					
					<CustomInput placeholder= {userInfo.name} readOnly  name="name" style = {{width: '100%'}}  />
					
					<CustomInput placeholder={userInfo.email} readOnly name="email" style = {{width: '100%'}}  />
					
					<CustomInput placeholder={userInfo.phone}  readOnly name="phone" style = {{width: '100%'}}  />
					
					<textarea placeholder="Write us a message" cols="20" rows="4" value={message} id="textc" name="message" minLength={10} onChange={(e) => setMessage (e.target.value)} ></textarea>
					
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
					
					<span className="movec">Afe Babalola University Post Graduate <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;School, Ado Ekiti, Ekiti State, Nigeria.</span><br /><br />
					
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
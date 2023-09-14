import './ContactPage.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { MapPin, Phone, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import img from '../../assets/image4.jpg';
import dtlogo from '../../assets/dtlogo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';





// eslint-disable-next-line react/prop-types
function ContactPage({ API_URL }){

	const [contactInfo, setContactInfo] = useState({});
	
	function updateContactInfo(event){
		const { name, value } = event.target;

		setContactInfo((prevContactInfo) => ({
			...prevContactInfo,
			[name]: value
		}));
	}


	async function sendMessage(event){
		event.preventDefault();
		let response = await fetch(`${API_URL}/api/message/new`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(contactInfo)
		});
		response = await response.json();
		alert(response.message);
    }



  
    return (

		<div className="smallContc">

			<form className='formc' onSubmit={sendMessage}>

				<div className="colc">
					<Link to='/' className='links'>
						<img src={dtlogo} alt="dtlogo" className="img"  style={{width:'150px'}}/>          
					</Link>

					<h2>Send Us A Message</h2>
					
					<CustomInput placeholder='Your full name*' name="name" style = {{width: '100%'}}  onChange={updateContactInfo} />
					
					<CustomInput placeholder='Email*' name="email" style = {{width: '100%'}}  onChange={updateContactInfo} />
					
					<CustomInput placeholder='Phone number*' name="phone" style = {{width: '100%'}}  onChange={updateContactInfo} />
					
					<textarea placeholder="Write us a message" cols="20" rows="4" id="textc" name="message" onChange={updateContactInfo} ></textarea>
					
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
					
					<span className="movec">Afe Babalola Post Graduate School</span><br /><br />
					
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
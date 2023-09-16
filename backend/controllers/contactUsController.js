import asyncHandler from 'express-async-handler'
import ContactUs from '../models/contactUsModel.js';





// ############################################## TO CONTACT US #########################################################################

//@desc    Contact Us
//route    POST /api/users/contactus
//@access  Private 


const contact =  asyncHandler(async (req, res) => {

    const {  fullName, email, phone, message  } = req.body;
    let newMessage = new ContactUs(req.body);
    newMessage = await newMessage.save();

    if (newMessage) {
        res.status (201).json ({
            message: 'Message sent successfully',
            newMessage,
            statusCode: 201,
        });
    } else {
        res.status (400);
        throw new Error ('Something went wrong');
    }
    
});



export {
    contact,
};
 
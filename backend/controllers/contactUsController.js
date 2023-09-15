import asyncHandler from 'express-async-handler'
import ContactUs from '../models/contactUsModel.js';





// ############################################## TO CONTACT US #########################################################################

//@desc    Contact Us
//route    POST /api/users/contactus
//@access  Private 


const contact =  asyncHandler(async (req, res) => {
    try{
        const {  name, mbox, number,  message  } = req.body;
        let newMessage = new ContactUs(req.body);
        newMessage = await newMessage.save();
        
        res.status(201).json({
            message: "message sent successfully",
            newMessage,
            statusCode: 201,
        });
    }catch(err){
        res.status(400).json({
            message: "something went wrong",
            statusCode: 400,
        });
    }
    
});



export {
    contact,
};
 
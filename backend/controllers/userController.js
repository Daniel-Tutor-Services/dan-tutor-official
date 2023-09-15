import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'





// ############################################## TO REGISTER A NEW USER #########################################################################

//@desc    Register a new User
//route    POST /api/users/
//@access  Public 


const registerUser =  asyncHandler(async (req, res) => {
    // res.status (401);
    // throw new Error('Something went wrong');


    // res.status (200).json({ message: 'Register User' });
    
    
    const { fullName, userName, email, phone, password } = req.body;
    
    const userExists = await User.findOne({email, userName})
    
    if (userExists) {
        res.status(400);
        throw new Error ('User already exists')
    }
    
    const user = await User.create ({
        fullName,
        userName,
        email,
        phone,
        password
    });

    if (user) {
        generateToken (res, user._id);
        res.status (201).json ({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
            phone: user.phone,
            password: user.password
        });
    } else {
        res.status (400);
        throw new Error ('Invalid user data');
    }
    
});










// ############################################## TO LOGIN A USER #########################################################################

//@desc    Auth user/set token
//route    POST /api/users/auth
//@access  Public 


const authUser =  asyncHandler(async (req, res) => {
    // res.status (401);
    // throw new Error('Something went wrong');

    
    // res.status (200).json({ message: 'Login Successful' });
    
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            message: 'Login Successful',
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email, 
            phone: user.phone 
        });
    } else {
        res.status(401);
        throw new Error('Invalid details');
    }
    
});










// ############################################## TO LOGOUT A USER #########################################################################


//@desc    Logout User
//route    POST /api/users/logout
//@access  Public 


const logoutUser =  asyncHandler(async (req, res) => {
    // res.status (401);
    // throw new Error('Something went wrong');

    // res.status (200).json({ message: 'Logout User' });

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json ({message: 'User logged out'})
});










// ############################################## TO GET A USER PROFILE #########################################################################


//@desc    Get User Profile
//route    GET /api/users/profile
//@access  Private 


const getUserProfile =  asyncHandler(async (req, res) => {
    // res.status (401);
    // throw new Error('Something went wrong');

    // res.status (200).json({ message: 'User Profile' });
    
    const user = {
        _id: req.user._id,
        fullName: req.user.fullName,
        userName: req.user.userName,
        email: req.user.email,
        phone: req.user.phone
    };

    res.status (200).json(user);
});









// ############################################## TO UPDATE A USER PROFILE #########################################################################

//@desc    Update User Profile
//route    PUT /api/users/profile
//@access  Private 


const updateUserProfile =  asyncHandler(async (req, res) => {
    // res.status (401);
    // throw new Error('Something went wrong');

    // res.status (200).json({ message: ' Update User Profile' });

    const user = await User.findById (req.user._id);

    if (user) {
        user.fullName = req.body.fullName || user.fullName;
        user.userName = req.body.userName || user.userName;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;

        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser =  await user.save();

        res.status (200).json({
            _id: updatedUser._id,
            fullName: updatedUser.fullName,
            userName: updatedUser.userName,
            email: updatedUser.email,
            phone: updatedUser.phone
 

        });
    } else{
        res.status(404);
        throw new Error ('User not found')
    }
});






export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};
 
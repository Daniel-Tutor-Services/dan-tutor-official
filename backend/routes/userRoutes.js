import express from "express";
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
} from "../controllers/userController.js";

import { contact } from "../controllers/contactUsController.js";
import { protect } from "../middleware/authMiddleWare.js";



router.post ('/', registerUser)
router.post ('/auth', authUser)
router.post ('/logout', logoutUser)
// router.get ('/profile',protect, getUserProfile)
// router.put ('/profile',protect, updateUserProfile)

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.post ('/contactus', contact)



export default router;
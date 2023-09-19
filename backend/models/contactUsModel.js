import mongoose from "mongoose";

const messageSchema = mongoose.Schema ({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true

    },
    message: {
        type: String,
        required: true
    }
},  {
    timestamps: true
});


const ContactUs = mongoose.model ('ContactUs', messageSchema);

export default ContactUs;

import mongoose from "mongoose";

const messageSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    mbox: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
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

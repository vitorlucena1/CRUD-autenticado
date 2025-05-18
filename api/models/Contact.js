import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
});

// Índice composto para garantir que cada usuário tenha contatos com telefones únicos
ContactSchema.index({ userId: 1, phone: 1 }, { unique: true });

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
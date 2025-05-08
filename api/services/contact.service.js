import Contact from "../models/Contact.js";

export const validateOwnership = async (userId, contactId) => {
    const contact = await Contact.findOne({ _id: contactId, userId });
    if (!contact) {
        console.error(`Unauthorized access or contact not found: Contact ID ${contactId}`);
        throw new Error("Contact not found or unauthorized");
    }
    return contact;
};

export const createContact = async (userId, contactData) => {
    return await Contact.create({ userId, ...contactData });
};

export const getContactsByUser = async (userId) => {
    return await Contact.find({ userId });
};

export const updateContactById = async (contactId, updateData) => {
    return await Contact.findByIdAndUpdate(contactId, updateData, { new: true });
};

export const deleteContactById = async (contactId) => {
    return await Contact.findByIdAndDelete(contactId);
};
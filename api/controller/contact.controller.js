import {
    validateOwnership,
    createContact,
    getContactsByUser,
    updateContactById,
    deleteContactById,
} from "../services/contact.service.js";

const addContact = async (req, res) => {
    const userId = req.user.id;
    const { name, email, phone, address, notes } = req.body;

    if (!name || !phone) {
        console.error("Bad request: Missing required fields");
        return res.status(400).json({ message: "Name and phone are required" });
    }

    try {
        const newContact = await createContact(userId, { name, email, phone, address, notes });
        console.log(`Contact created successfully: ${newContact._id}`);
        return res.status(201).json({ message: "Contact added successfully", contact: newContact });
    } catch (error) {
        console.error("Error adding contact", error);
        return res.status(500).json({ message: `Error adding contact: ${error.message}` });
    }
};

const getAllContacts = async (req, res) => {
    const userId = req.user.id;

    try {
        const contacts = await getContactsByUser(userId);
        console.log(`Contacts fetched for user ID: ${userId}`);
        return res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts", error);
        return res.status(500).json({ message: `Error fetching contacts: ${error.message}` });
    }
};

const updateContact = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const { name, email, phone, address, notes } = req.body;

    try {
        await validateOwnership(userId, id);
        const updatedContact = await updateContactById(id, { name, email, phone, address, notes });
        console.log(`Contact updated successfully: ${id}`);
        return res.status(200).json({ message: "Contact updated successfully", contact: updatedContact });
    } catch (error) {
        console.error("Error updating contact", error);
        return res.status(500).json({ message: `Error updating contact: ${error.message}` });
    }
};

const deleteContact = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        await validateOwnership(userId, id);
        await deleteContactById(id);
        console.log(`Contact deleted successfully: ${id}`);
        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error("Error deleting contact", error);
        return res.status(500).json({ message: `Error deleting contact: ${error.message}` });
    }
};

const getContactById = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const contact = await validateOwnership(userId, id);
        console.log(`Contact fetched successfully: ${id}`);
        return res.status(200).json(contact);
    } catch (error) {
        console.error("Error fetching contact", error);
        return res.status(500).json({ message: `Error fetching contact: ${error.message}` });
    }
};

const partialUpdateContact = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const updateData = req.body;

    try {
        await validateOwnership(userId, id);
        const updatedContact = await updateContactById(id, updateData);
        console.log(`Contact partially updated successfully: ${id}`);
        return res.status(200).json({ message: "Contact updated successfully", contact: updatedContact });
    } catch (error) {
        console.error("Error partially updating contact", error);
        return res.status(500).json({ message: `Error partially updating contact: ${error.message}` });
    }
};

export default { addContact, getAllContacts, updateContact, deleteContact, getContactById, partialUpdateContact };
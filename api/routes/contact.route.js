import express from 'express';
import contactController from '../controller/contact.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js'; // Middleware de autenticação
const router = express.Router();

router.post('/',verifyToken, contactController.addContact);
router.get('/', verifyToken, contactController.getAllContacts);
router.get('/:id', verifyToken, contactController.getContactById);
router.put('/:id',verifyToken, contactController.updateContact);
router.patch('/:id', verifyToken, contactController.partialUpdateContact);
router.delete('/:id', verifyToken, contactController.deleteContact);

export default router;
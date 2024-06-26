const express=require("express");
const router = express.Router();
const { getContacts, createContact, getContact, UpdateContact, deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route('/').get(getContacts);

router.route('/').post(createContact);

router.route('/:id').get(getContact);

router.route('/:id').put(UpdateContact);

router.route('/:id').delete(deleteContact);

module.exports=router;
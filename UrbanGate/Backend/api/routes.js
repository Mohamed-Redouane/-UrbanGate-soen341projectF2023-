import express from 'express';
import createUser from './controllers/createUser.js';
import signIn from './controllers/signIn.js';

const router = express.Router();

router.post('/createUser', createUser);
router.post('/signIn', signIn);

export default router;
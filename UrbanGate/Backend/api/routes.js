import express from 'express';
import createUser from './controllers/createUser.js';
import signIn from './controllers/signIn.js';
import createProperty from './controllers/createProperty.js';
import readProperty from './controllers/readProperty.js';
import manageProperties from './controllers/manageProperties.js';

const router = express.Router();

router.post('/createUser', createUser);
router.post('/signIn', signIn);
router.post('/createProperty', createProperty);
router.get('/readProperty', readProperty);
router.post('/manageProperties', manageProperties);

export default router;
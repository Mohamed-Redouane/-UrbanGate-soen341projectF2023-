import express from 'express';
import createUser from './controllers/createUser.js';
import signIn from './controllers/signIn.js';
import createProperty from './controllers/createProperty.js';
import readProperty from './controllers/readProperty.js';
import manageProperties from './controllers/manageProperties.js';
import checkUser from './controllers/checkUser.js';
import manageBrokers from './controllers/manageBrokers.js';
import readBrokerID from './controllers/readBrokerID.js';
import updateBroker from './controllers/updateBroker.js';
import deleteBroker from './controllers/deleteBroker.js';
import readPropertyID from './controllers/readPropertyID.js';
import deletePropertyID from './controllers/deletePropertyID.js';


const router = express.Router();

router.post('/createUser', createUser);
router.post('/signIn', signIn);
router.post('/createProperty', createProperty);
router.get('/readProperty', readProperty);
router.post('/manageProperties', manageProperties);
router.post('/checkUser', checkUser);
router.post('/manageBrokers', manageBrokers);
router.get('/readBrokerID/:_id', readBrokerID);
router.post('/updateBroker', updateBroker);
router.get('/deleteBroker/:_id', deleteBroker);
router.get('/readPropertyID/:_id', readPropertyID);
router.delete('/deletePropertyID/:_id', deletePropertyID);


export default router;
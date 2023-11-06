// Separating routes from index.js
//https://www.w3schools.com/js/js_es6.asp
//https://www.youtube.com/watch?v=kBhkPufW8Cw&t=573s

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
import { createVisitRequest } from './controllers/visitRequest.js';
import { manageVisitRequests } from './controllers/manageVisitRequests.js';
import readPropertiesForUser from './controllers/readPropertiesForUser.js';
import updateProperty from './controllers/updateProperty.js';
import searchBroker from './controllers/searchBroker.js';



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
router.post('/visitRequest', createVisitRequest);
router.get('/manageVisitRequests/:brokerId', manageVisitRequests);
router.get('/readPropertiesForUser/:brokerId',readPropertiesForUser);
router.post('/updateProperty', updateProperty);
router.post('/searchBroker', searchBroker);


export default router;
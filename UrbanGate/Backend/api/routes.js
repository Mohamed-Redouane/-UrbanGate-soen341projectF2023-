const express = require('express');
const router = express.Router();
import cors from 'cors'
import USER from './models/users'
router.use(cors());

        router.get('/homebuyer/search', (req, res) => {
        
        });

        router.get('/homebuyer/favorites', (req, res) => {
        

        });

        router.get('/homebuyer/request-visit', (req, res) => {
            
            
        });
        router.get('/homebuyer/search-brokers', (req, res) => {
        
        });
        
        router.get('/homebuyer/mortgage-calculator', (req, res) => {
            
        });
        router.get('/Property_renter/search', (req, res) => {
       
        });
    
        router.get('/Property_renter/favorites', (req, res) => {
           
    
        });
    
        router.get('/Property_renter/request-visit', (req, res) => {
            
            
        });
        router.get('/Property_renter/search-brokers', (req, res) => {
           
        });
        router.get('/broker/submit-offer', (req, res) => {
       
        });
    
        router.get('/broker/property-listings', (req, res) => {
           
    
        });
    
        router.get('/broker/match-properties', (req, res) => {
            
            
        });
        router.get('/broker/offer-management', (req, res) => {
           
        });
        
        router.get('/broker/manage-visits', (req, res) => {
            
        });

        router.get('/admin/brokers', (req, res) => {// eg: add remove block 
            
        });
       
module.exports = router;
const express = require('express');
const { 
    apiPOST,
    apiGET, 
}  
= require("../controller/apiController");
const router =  express.Router();

router.route('/')
    .post(apiPOST)
    .get(apiGET);

module.exports = router;
const express = require('express');
const router = express.Router();  
const empController = require('../controllers/empController');  

router.get('/index', empController.index);
router.get("/show/:id",empController.show);
router.post("/store",empController.store);
router.put("/update/:id",empController.update);
router.delete("/delete/:id",empController.delete);

module.exports=router;

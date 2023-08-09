const express = require('express');
const router = require('express').Router();
const categoryController = require("../controllers/categoryController");


//get all

router.get("/all", categoryController.getAll);
//create category
router.post('/create', categoryController.create);
//update a category
router.put('/update/:id', categoryController.update);
//delete category
router.delete('/delete/:id', categoryController.delete);
module.exports = router;
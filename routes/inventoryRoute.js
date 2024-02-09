// Needed Resources
const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
const utilities = require("../utilities/");
const regValidate = require("../utilities/inventory-validation");

// Route to build inventory by classification view
router.get(
  "/type/:classificationId",
  utilities.handleErrors(invController.buildByClassificationId),
);

// Route to build inventory view
router.get(
  "/detail/:inventoryId",
  utilities.handleErrors(invController.buildByModelId),
);

// Route to build management view
router.get("/", invController.buildManagement);

// Route to build add-classification view
router.get("/add-classification", invController.BuildAddClassification);

/* ***********************************
 * Unit 4 Add the new Classification
 * Assignment 4
 * Process the add classification data
 * **********************************/
router.post(
  "/add-classification",
  regValidate.classificationRules(),
  regValidate.checkClassificationData,
  utilities.handleErrors(invController.AddNewClassification),
);

/* ***********************
 * Unit 4 Deliver Add-Inventory View
 * Assignment 4
 *************************/
router.get("/add-inventory", invController.BuildAddInventory);

/* ***********************
 * Unit 4 Add the new Inventory
 * Assignment 4
 * Process the add inventory data
 *************************/
router.post(
  "/add-inventory",
  regValidate.inventoryRules(),
  regValidate.checkInventoryData,
  utilities.handleErrors(invController.AddNewInventory),
);

module.exports = router;

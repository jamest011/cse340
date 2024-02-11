// Needed Resources
const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
const utilities = require("../utilities/");
const Util = require("../utilities")
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
router.get(
  "/", 
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.buildManagement)
)

// Route to build add-classification view
router.get(
  "/add-classification", 
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.BuildAddClassification)
)

/* ***********************************
 * Unit 4 Add the new Classification
 * Assignment 4
 * Process the add classification data
 * ******************************** */
router.post(
  "/add-classification",
  regValidate.checkAccountAccess,
  regValidate.classificationRules(),
  regValidate.checkClassificationData,
  utilities.handleErrors(invController.AddNewClassification),
);

/* *********************************
 * Unit 4 Deliver Add-Inventory View
 * Assignment 4
 * ****************************** */
router.get(
  "/add-inventory", 
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.BuildAddInventory)
)

/* ******************************
 * Unit 4 Add the new Inventory
 * Assignment 4
 * Process the add inventory data
 * *************************** */
router.post(
  "/add-inventory",
  regValidate.inventoryRules(),
  regValidate.checkInventoryData,
  utilities.handleErrors(invController.AddNewInventory),
);

/* *******************************
 * Unit 5 Deliver Management Route
 * **************************** */
router.get(
  "/management", 
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.buildManagement)
)

/* *******************************
 * Get inventory for AJAX Route
 * Unit 5 Select inv item activity
 * **************************** */
router.get(
  "/getInventory/:classification_id",
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.getInventoryJSON)
)

/* *******************************
 * Get inventory for the edit-view
 * Unit 5, Update Activity Part 1
 * **************************** */
router.get(
  "/edit/:inv_id",
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.editInventoryView)
)

/* *****************************
 * Update inventory data
 * Unit 5 Update Activity Part 2
 * ************************** */
router.post(
  "/update/", 
  regValidate.checkAccountAccess,
  regValidate.inventoryRules(),
  regValidate.checkUpdateData,
  utilities.handleErrors(invController.updateInventory)
)

/* ********************************
 * Unit 5, Deliver Delete Inv Route
 * Delete Team Activity
 * ***************************** */
router.get(
  "/delete/:inv_id", 
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.deleteView)
)

/* ********************************
 * Unit 5, Deliver Delete Inv Route
 * Delete Team Activity
 * ***************************** */
router.post(
  "/delete", 
  regValidate.checkAccountAccess,
  utilities.handleErrors(invController.deleteItem)
)

module.exports = router;

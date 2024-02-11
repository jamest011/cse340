/* ***********************************
 * Account Routes
 * Unit 4, deliver login view activity
 * ********************************* */
// Needed Resources
const express = require("express");
const router = new express.Router();
const accountController = require("../controllers/accountController");
const utilities = require("../utilities");
const regValidate = require('../utilities/account-Validation.js');
const validate = require("../utilities/account-Validation.js");

/* ***********************************
 * Deliver Login View
 * Unit 4, deliver login view activity
 * ********************************* */
router.get("/login", utilities.handleErrors(accountController.buildLogin));

/* *******************************************
 * Deliver Registration View
 * Unit 4, deliver login registration activity
 * ***************************************** */
router.get(
  "/register",
  utilities.handleErrors(accountController.buildRegister),
);

/* ***********************************
 * Deliver account view
 * Unit 5 - JWT Authorization activity
 * ******************************** */
router.get(
  "/",  
  utilities.checkLogin,
  utilities.handleErrors(accountController.buildManagement)
);

/* *************************************
 * Process Registration
 * Unit 4, process registration activity
 * *********************************** */
router.post(
  "/register",
  regValidate.registrationRules(),
  regValidate.checkRegData,
  utilities.handleErrors(accountController.registerAccount),
);

// Process the login attempt
// Process the login request
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleErrors(accountController.accountLogin)
)

/* ***********************
 * Update Account Data
 * Unit 5 Task 4
 * *********************** */
router.get(
  "/editAccount",
  utilities.checkLogin,
  utilities.handleErrors(accountController.editAccountView)
)

/* ***********************
 * Update Account Data
 * Unit 5 Task 4
 * *********************** */
router.post(
  "/update/", 
  regValidate.accountUpdateRules(),
  regValidate.checkAccountData,
  utilities.handleErrors(accountController.updateAccount)
)

/* ***********************
 * Update Password Data
 * Unit 5 Task 4
 * *********************** */
router.post(
  "/update/password", 
  regValidate.passwordRules(),
  regValidate.checkAccountData,
  utilities.handleErrors(accountController.updatePassword)
)


/* ***********************
 * Logout account
 * Unit 5 Task 6
 * *********************** */
router.get(
  "/logout",
  utilities.handleErrors(accountController.logoutAccount)
)

module.exports = router;
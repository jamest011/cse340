/* ***********************************
 * Account Routes
 * Unit 4, deliver login view activity
 ********************************** */
// Needed Resources
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")

/* ***********************************
 * Deliver Login View
 * Unit 4, deliver login view activity
 ********************************** */
router.get("/login", utilities.handleErrors(accountController.buildLogin))

/* *******************************************
 * Deliver Registration View
 * Unit 4, deliver login registration activity
 ****************************************** */
router.get("/register", utilities.handleErrors(accountController.buildRegister))

/* *************************************
 * Process Registration
 * Unit 4, process registration activity
 ************************************ */
router.post('/register', utilities.handleErrors(accountController.registerAccount))

// Process the login attempt
router.post(
    "/login",
    (req, res) => {
      res.status(200).send('login process')
    }
)

module.exports = router
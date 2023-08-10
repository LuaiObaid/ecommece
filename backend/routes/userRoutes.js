/*const express = require("express");
const {
  registerUser,
  
} = require("../controllers/signUp");
//const { protect } = require("../middleWares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser) //.get(protect, allUsers);
//router.post("/login", authUser);
module.exports = router;
*/

const express = require("express");
const { registration, authUser } = require("../controllers/signUp");

const router = express.Router();

router.route("/").post(registration);
router.post("/login", authUser);
module.exports = router;


// const express = require("express");
// const { 
//     register,
//     login, 
//     loginGET, 
//     users,
//     usersById 
// } = require("../controller/user");
// const router = express.Router();
// const {protect,authrize} = require("../middleware/protect")

// //"/api/users"
// router.route("/register").post(register);
// router.route("/login")
//     .get(loginGET)
//     .post(login);
// router.route("/users")
//     .get(protect, authrize("admin","sysadmin"),users);
// router.route("/users/:id").get(protect,usersById);

// module.exports = router;

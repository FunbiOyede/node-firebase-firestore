const express = require("express");
const router = express.Router();
const firestore = require("../controllers/firestoreContollers");

router.get("/api/user", firestore.get_all_user);
// update user
router.put("/api/user/update/:id", firestore.update_user);

// delete user
router.delete("/api/delete/:id", firestore.delete_user);

// create user
router.post("/api/create", firestore.create_user);

// get a particular user
router.get("/api/user/:id", firestore.get_user);
// welcome note
router.get("/", (req, res) => {
  res.status(200).send("hello from firebase");
});
module.exports = router;

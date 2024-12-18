const express = require("express");
const { fetchAllPosts, addPost } = require("../controller/Posts");
const { checkIsIdPresent } = require("../middlewares/DataSanity");

const router = express.Router();

router.get("/", fetchAllPosts);
router.post("/", checkIsIdPresent, addPost);


module.exports = router;
const express = require("express");

const router = express.Router();

const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

router.get("/health", (req, res) => {
    return res.status(200).json({ msg: "The API is healthy!" });
})

router.get("/dashboard", authMiddleware, dashboard);

router.post("/login", login);

module.exports = router;
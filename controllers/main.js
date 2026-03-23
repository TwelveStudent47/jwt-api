const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            throw new CustomAPIError("Please provide username and password", 400);
        }

        const id = new Date().getDate();

        const token = jwt.sign({
            id,
            username
        }, process.env.JWT_SECRET,
        {
            expiresIn: "30d"
        });

        res.status(200).json({ msg: "User created", token });
    } catch (err) {
        next(err);
    }
} 

const dashboard = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")){
            throw new CustomAPIError("No token", 401);
        }

        const luckyNumber = Math.floor(Math.random()*100);
        res.status(200).json({ msg: `Hello, `, secret: `Here is your authorized data: ${luckyNumber}` });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    login,
    dashboard
};
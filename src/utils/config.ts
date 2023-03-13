require("dotenv").config();

const CONFIG = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/genesis',
    PORT: process.env.PORT  || 8080,
    JWT_SECRET: process.env.JWT_SECRET,
    BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS) || 12,
}

export default CONFIG;
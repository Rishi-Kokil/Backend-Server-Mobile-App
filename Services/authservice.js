import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { authenticateJWT } from './services.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const parentParentDir = path.resolve(__dirname, '../');
const envPath = path.resolve(parentParentDir, '.env');
dotenv.config({ path: envPath });

const { SECRET_ADMIN_KEY, SECRET_USER_KEY} = process.env;

console.log(SECRET_ADMIN_KEY + SECRET_USER_KEY);

const authenticateUser = async (req, res, next) => {
    const header = req.headers.authorization;
    console.log(header);
    if (header) {
        try {
            const token = header.split(" ")[1];
            const data = await authenticateJWT(token, SECRET_USER_KEY);
            req.user = data;
            next();
        } catch (error) {
            res.status(403).json({ message: error.message });
        }
    }
    else {
        res.status(403).json({ message: "Unauthorized" });
    }
}

const authenticateAdmin = async (req, res, next) => {
    const header = req.headers.authorization;
    if (header) {
        try {
            const token = header.split[0];
            const data = await authenticateJWT(token, SECRET_ADMIN_KEY);
            req.user = data;
            next();
        } catch (error) {
            res.status(403).json({ message: error.message });
        }
    }
    else {
        res.status(403).json({ message: "Unauthorized" });
    }
}


export {authenticateUser , authenticateAdmin};

const authenticateUser = async (req, res, next) => {
    const header = req.headers.authorization;
    console.log(header);
    if (header) {
        try {
            const token = header.split(" ")[1];
            const data = await authenticateJWT(token, SECRECT_USER_KEY);
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

export default authenticateUser;
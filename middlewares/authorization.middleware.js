const checkAuthorization = (permission) => {
    return (req, res, next) => {
        const role = req.query.role;
        if (permission.includes(role)) {
            next()
        } else {
           return res.status(403).json({
                status: "failed",
                message: "You have no permission to view this data"
            })
        }
    }
}

module.exports = {
    checkAuthorization
}
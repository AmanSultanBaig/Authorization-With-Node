const userList = require('../data/userlist')

const getUserList = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "User list fetched successfully",
        data: userList,
    })
}

module.exports = {
    getUserList
}

var Reflux = require("reflux");

var AntdUserinfoActions = Reflux.createActions([
    "getAllUser",
    "modifyUser",
    "addUser",
    "getUserByName",
    "deleteUserByName"
    ]);

module.exports = AntdUserinfoActions;

var Reflux = require("reflux");

var AntdActions = Reflux.createActions([
    "getAllUser",
    "modifyUser",
    "addUser",
    "getUserByName",
    "deleteUserByName"
]);

module.exports = AntdActions;
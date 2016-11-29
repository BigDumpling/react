var Reflux = require("reflux");

var AntdLoginActions = Reflux.createActions([
    "login",
    "regist",
    "findPassword"
]);

module.exports = AntdLoginActions;
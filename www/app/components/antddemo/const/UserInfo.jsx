import Role from "./Role.jsx";

export class UserInfo {
    usrId : string;
    usrName : string;
    usrPwd : string;
    pass : string;
    usrRemark : string;
    usrType : string;
    usrDisableTag : string;
    usrEmail : string;
    usrCreateBy : string;
    usrCreateDate : string;
    usrUpdateBy : string;
    usrUpdateDate : string; 
    roleDOList : Array<Role>;
}
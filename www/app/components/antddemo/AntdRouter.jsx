import React from "react";
import { Router, Route, Link, browserHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

import AntdDemo from "./AntdDemo.jsx";
import AntdForm from "./AntdForm.jsx";
import AntdIntroduce from "./AntdIntroduce.jsx";
import AntdTable from "./AntdTable.jsx";
import AntdLogin from "./AntdLogin.jsx";
import AntdRegist from "./AntdRegist.jsx";

class AntdRouter extends React.Component{
    
    render(){

        return(
            <Router history={browserHistory}>
                <Route path="/(antdLogin)" component={AntdLogin}></Route>
                <Route path="/antdRegist" component={AntdRegist}></Route>
                <Route path="/antdDemo" component={AntdDemo}>
                    <IndexRoute component={AntdIntroduce} />
                    <Route path="/antdIntroduce" component={AntdIntroduce} />
                    <Route path="/antdTable" component={AntdTable} />
                    <Route path="/antdForm" component={AntdForm} />
                </Route>
            </Router>
        );
    }
}


export default AntdRouter;
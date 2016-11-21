import React from "react";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

import AntdDemo from "./AntdDemo.jsx";
import AntdForm from "./AntdForm.jsx";
import AntdIntroduce from "./AntdIntroduce.jsx";
import AntdTable from "./AntdTable.jsx";
import AntdLogin from "./AntdLogin.jsx";


class AntdRouter extends React.Component{
    
    render(){

        return(
            <Router history={hashHistory}>
                <Route path="/" component={AntdDemo}>
                    <IndexRoute component={AntdIntroduce} />
                    <Route path="antdIntroduce" component={AntdIntroduce} />
                    <Route path="antdTable" component={AntdTable} />
                    <Route path="antdForm" component={AntdForm} />
                </Route>
                <Route path="antdLogin" component={AntdLogin}>
                </Route>
            </Router>
        );
    }
}


export default AntdRouter;
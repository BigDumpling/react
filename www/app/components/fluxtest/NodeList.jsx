import React from "react";
import ReactDOM from "react-dom";

export default class NodeList extends React.Component{

    constructor(...args){
        super(...args);
    }

    render(){
        let noteNodes = this.props.notes;
        return(
            <div className="list-group">
                {noteNodes}
            </div>
        );
    }
}
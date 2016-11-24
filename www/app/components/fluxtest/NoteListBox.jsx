import React from "react";
import NodeList from "./NodeList.jsx"

export default class NodeListBox extends React.Component{

    constructor(...args){
        super(...args);
        this.state = {
            notes:"I am notes"
        }
    }

    onAdd(){
        alert("I am NOteListBox.onadd()!--------------------");
    }

    render(){
        return(
            <div className="col-md-12">
                <NodeList ref="noteList" notes={this.state.notes} onEdit={this.props.onEdit.bind(this)}></NodeList>
                <div className="centered"><button onClick={this.onAdd.bind(this)} className="btn btn-info btn-lg">Add New</button></div>
            </div>
        );
    }
}
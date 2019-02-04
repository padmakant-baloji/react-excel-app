import React, { Component } from 'react';  
import AppBar from "./AppBar";
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
               <AppBar />
               <div className="container todo-container m-t-header">
                 {this.props.children}
                </div>
            </div>
         );
    }
}
 
module.exports =  AppContainer;
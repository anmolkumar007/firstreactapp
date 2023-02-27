import React from 'react'
class LifeCycleComponent extends React.Component{
    constructor(){
        super();
        console.log("constructor called");
    }

    componentDidMount(){
        console.log("component did mount called");
    }

    render(){
        console.log("render called")
        return(
        <p>Component Life Cycle</p>
    )}
}

export default LifeCycleComponent;
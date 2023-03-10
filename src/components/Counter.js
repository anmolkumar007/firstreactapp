import React from 'react';
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
        //this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
    }
    increment=()=>{
        this.setState({
            counter : this.state.counter+1
        })
    }

    decrement=()=>{
        this.setState({
            counter: this.state.counter-1
        })
    }

    render(){
        return(
            <div>
                <h2>COUNTER: {this.state.counter}</h2>
                <button class="btn btn-success" onClick={this.increment}>+</button>
                <button class="btn btn-danger" onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;
import React from "react";
class StateComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Thomas Muller",
            course: "footballer"
        }
    }
    changeState=()=>
    {
        console.log("Lionel Messi")       /*useState Should be used when we come to hooks*/
    }
    render() {
        return (
            <div>
                <h1>This is Statement Componenet</h1>
                <h2> Hello, {this.state.name}<br></br> he is {this.state.course}</h2>
                <h3>I am Changing the State of {this.state.name} to {this.changeState}</h3>
                <button onClick={this.changeState}>Click me to change the state</button>
            </div>)
    }
}
export default StateComponent;
import React from "react";
import { ReactDOM } from "react";
import TestComp from "../functionalComponents/TestComp";

class ReiteratorComp extends React.Component{
    render(){
        return(
            <div>
                <p>Reiteratoring class components ss</p>
                <TestComp/>
            </div>
        )
    }
}
export default ReiteratorComp;
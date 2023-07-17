import React,{Component} from "react";

 export class MyFunctionalComponent extends Component{
    render(){
        return(
    <>
     
      <div className="Function-Container">
        <h2 className="External-Css">This is Created Using Functional Component</h2>
        <div className="External-Css">This is done using external css</div>
        <div style={{textAlign:"center",color:"blue",fontSize:"20px"}}>This is done using inline css</div>
      </div>
    </>
        )
    }
}
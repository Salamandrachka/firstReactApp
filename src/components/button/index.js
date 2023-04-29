import React from "react";
import "./button.scss";


export default class Button extends React.Component{
     render(){
        return (
           
            <button className= {this.props.className}
            id={this.props.id}
            style= {{backgroundColor: this.props.backgroundColor}}
            onClick={()=>{
                this.props.hendleClick()
            }}
            > {this.props.text}</button>
        )
    }
        //   <div className="App">
    //     <button
    //       className="toggle-button"
    //       id="centered-toggle-button"
    //       onClick={e => {
    //         this.showModal(e);
    //       }}
    //     >
    //       {" "}
    //       show Modal{" "}
    //     </button>
}
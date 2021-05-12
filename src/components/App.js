import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	        this.state={
            v:0
        }
    }
     Para3=()=> {
        this.setState({
            v:1
        })
    }

    render() {
	           function Para1(){
            return(
                <p style={{marginLeft:'30%',marginTop:'1%'}} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
                </p>
               ) 
        }
    	return(
    		<div id="main">
		 <button id="click" onClick={this.Para3}>click me</button>
                {this.state.v===1&&(
                    <Para1/>
                )}
    		</div>
    	);
    }
}


export default App;


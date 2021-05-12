import React from "react";
import '../styles/App.css';

class App extends React.Component {
    constructor() {
		super();
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
    	return(
    		<div id="main">
		 <button id="click" onClick={this.Para3}>click me</button>
                {this.state.v===1&&(
                    <p style={{marginLeft:'30%',marginTop:'1%'}} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
                </p>
                )}
    		</div>
    	)
    }
}


export default App;


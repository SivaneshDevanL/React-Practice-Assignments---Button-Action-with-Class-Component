import React, {Component, useState} from "react";
import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
// 		super(props);
// 	     this.state = {str: ''}
// 	};
   
//     render() {
//     	return(
//     		<div id="main">
// 		{this.state.str=='b' &&(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}    
//             <button id="click" onClick={()=>this.setState({str:'b'})}>Click Me</button>
//     		</div>
//     	);
//     }
// }
 

class App extends Component {

 constructor(props) {

 super(props);

 this.state = {

 boolean: false

 };

 };

//  handleSubmit=(e)=>{

//  if(!this.state.boolean){

//  this.setState({ boolean: true });

//  }

//  }

 

render() {

//  var bool = "";

//  if (this.state.boolean) {

//  bool = (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>);

//  }

 return(

 <div id="main">

 { /* Do not remove this main div!! */ }

 <button type="submit" id="click" onClick={()=>this.setState({boolean:true})}>Click Me !!</button>
{this.state.boolean===true&&(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}	
//  {bool}

 </div>

 );

 }

}

 



export default App;

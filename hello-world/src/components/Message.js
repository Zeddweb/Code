import React, {Component} from 'react'


class Message extends Component{

    constructor(){    //creating constructor
super()               //constructing super method
this.state = {        // state object
 message: 'Welcome visitor'  // initilize a property

 }
}
changeMessage(){
    this.setState({
message: 'Thank you for subscribing'

    })
}
render(){
return(
<div>
<h1> {this.state.message} </h1>
<button onClick={ () => this.changeMessage()}> Subscribe</button>
</div>
  )
 }
}

export default Message
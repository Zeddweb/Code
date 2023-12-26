import React, { Component } from 'react'   //snippet used rce

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {     //snippet used rconst
         count: 0
      }
    }
    increment(){
// this.state.count= this.state.count + 1
// console.log(this.state.count)     not used because UI not rerendering when state is changed. Thus. state not changes directly

// this.setState(
//     {
//        count:this.state.count + 1
//     },
//     () => {

// console.log('Callback value', this.state.count)
//     }
// )
this.setState(prevState => ({

count: prevState.count + 1
}))
console.log(this.state.count)
    }

incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}



    
  render() {
    return (
      <div>
        Count- {this.state.count}
        <button onClick={() => this.incrementFive() }>Incremement</button>
      </div>
    )
  }
}

export default Counter

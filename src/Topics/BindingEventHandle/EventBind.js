import React, { Component } from 'react'

// I want you to ultimately keep in mind is 'this' keyword is undefined in an event handler and that is the reason event binding is necessary in react class components

export default class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    // third approach
   // this.clickHandle = this.clickHandle.bind(this)
  }

  // clickHandle(){
  //   this.setState({
  //     message: 'Goodbye..!'
  //   })
  //   // 'this' is undefined if not use 'bind'
  //   console.log(this)
  // }

  // fourth approach

  clickHandle = () => {
    this.setState({
      message: 'Goodbye..!'
    })
    console.log(this)
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>

         {/* first approach */}
         {/* <button onClick={this.clickHandle.bind(this)}>Click</button> */}

        {/* second approach */}
        {/* <button onClick={ ()=> this.clickHandle()}>Click</button> */}

        {/* third approach */}
        {/* <button onClick={this.clickHandle}>Click</button> */}

        {/* fourth approach */}
        <button onClick={this.clickHandle}>Click</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

 class ClassComp extends Component {
  render() {
    const {fname, lname} = this.props
   // const {state1, state2} = this.state
    return (
      <div>
        <h1>Hello {fname} , {lname}</h1>
        
        we can give like this also
        <h1>Hello {this.props.fname} , {this.props.lname}</h1>
      </div>
    )
  }
}
export default ClassComp;

import React, { Component } from 'react'

export default class Mes_Update extends Component {
    constructor(){
        super()
        this.state = {
            message: "welcome visitors"
        }
    }

    changeMessage(){
        this.setState({ message: "thankyou for subscribing"})
    }


  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    )
  }
}

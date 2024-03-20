import React, { Component } from 'react'

export default class ClassClick extends Component {

    clickHandle(){
        console.log('button clicked')
    }

  render() {
    
    return (
      <div>
        <button onClick={this.clickHandle}>Click</button>
      </div>
    )
  }
}

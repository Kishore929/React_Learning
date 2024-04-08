import React, { Component } from 'react'
import ComponentInput from './ComponentInput'

class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.compRef = React.createRef()
    }

    clickhandler = ()=>{
      this.compRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <ComponentInput ref={this.compRef}/>
        <button onClick={this.clickhandler}>Focus input</button>
      </div>
    )
  }
}

export default Parentcomp

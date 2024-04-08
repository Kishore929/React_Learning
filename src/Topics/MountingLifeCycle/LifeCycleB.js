import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(){
    console.log("LifecycleB getderived from props")
    return null
  }

  // predefined method to execute at end
  componentDidMount(){
    console.log('LifecycleB from component did mount')
  }
  
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LikecycleB
      </div>
    )
  }
}

export default LifecycleB

import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

class LifecycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(){
    console.log("lifecycleA getderived from props")
    return null
  }

  // predefined method to execute at end
  componentDidMount(){
    console.log('lifecycleA from component did mount')
  }
  
  render() {
    console.log('lifecycleA render')
    return (
      <div>
      <div> LikecycleA  </div>
      <LifecycleB />
      </div>
    )
  }
}

// execution
// LifecycleA constructor
// lifecycleA getderived from props
// lifecycleA render
// LifecycleB constructor
// lifecycleB getderived from props
// lifecycleB render
// lifecycleB from component did mount
// lifecycleA from component did mount                   => it will execute end of the application

export default LifecycleA

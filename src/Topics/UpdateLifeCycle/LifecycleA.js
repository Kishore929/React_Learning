import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

class LifeCycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'code'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state){
    console.log("lifecycleA getderived from props")
    return null
  }

  shouldComponentUpdate(){
    console.log('lifecycleA from SHOULD COMPONENT UPDATE')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('lifecycleA from getsnapshot beforeupdate')
    return null
  }

  componentDidUpdate(){
    console.log('lifecycleA from component did update')
  }

  changestste = () => {
    this.setState({
      name: 'CodeEvulation'
    })
  }

  render() {
    console.log('lifecycleA render')
    return (
      <div>
      <div> LikecycleA  </div>
      <button onClick={this.changestste}>{this.state.name}</button>
      <LifecycleB />
      </div>
    )
  }
}

// execution
// lifecycleA getderived from props
// lifecycleA from SHOULD COMPONENT UPDATE
// lifecycleA render
// lifecycleB getderived from props
// lifecycleB from SHOULD COMPONENT UPDATE
// lifecycleB render
// lifecycleB from getsnapshot beforeupdate
// lifecycleA from getsnapshot beforeupdate
// lifecycleB from component did update
// lifecycleB from component did update


export default LifeCycleA

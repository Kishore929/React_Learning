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

  shouldComponentUpdate(){
    console.log('lifecycleB from SHOULD COMPONENT UPDATE')
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log('lifecycleB from getsnapshot beforeupdate')
    return null
  }

  componentDidUpdate(){
    console.log('lifecycleB from component did update')
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

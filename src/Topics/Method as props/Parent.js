import React, { Children, Component } from 'react'
import ChildComp from './child'


export default class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.methodparent = this.methodparent.bind(this)
    }

    methodparent(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
    
  render() {
    return (
      <div>
        <ChildComp parentHandler = {this.methodparent}/>
      </div>
    )
  }
}

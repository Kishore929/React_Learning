import React, { Component } from 'react'

class Refsdemo extends Component {
    // it is for direct focus on this element like here input by using reference
    constructor(props) {
      super(props)
        // by using React ref we are createing ref
        this.inputref = React.createRef()

        this.cbRef = null
        this.setcbRef = element => { this.cbRef = element}

    }
    
    // IMP to implement in this componentdidmount because it will be execute end of this app
    componentDidMount(){
        // this.inputref.current.focus()
        // console.log(this.inputref)
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickhandler = () =>{
        // console.log(this.inputref.current.value) 
        alert(this.inputref.current.value)
    }

  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inputref} /> */}

        <input type='text' ref={this.setcbRef} />
        <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default Refsdemo

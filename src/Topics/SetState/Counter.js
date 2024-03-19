import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // with in the setstate method we can able to see updated value by pass an 2nd argument ,
    // if u specify outside of the setstate block it will not update.

    increment() {

        // this.setState(
        //     { count: this.state.count + 1 }, () => { console.log('callback value', this.state.count) }
        // )


        // if we don't use prevstate it will not update because it is taking only current state
        
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => { console.log('callback value', this.state.count) })
            //don't put here
         console.log(this.state.count)

    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>count-{this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Five times +</button>
            </div>
        )
    }
}
export default Counter
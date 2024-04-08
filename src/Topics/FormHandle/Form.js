import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic:'react'
        }
    }

    changeusername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    chnagecomments = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    topicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        // event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange={this.changeusername}/>
                </div>
                <div>
                    <label>comments</label>
                    <textarea value = {this.state.comments}  onChange={this.chnagecomments} /> 
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.topicChange} >
                        <option value='react'>React</option>
                        <option value='java'>Java</option>
                        <option value='python'>Python</option>
                    </select>
                </div>
                <button >Submit</button>
            </form>
        )
    }
}

export default Form

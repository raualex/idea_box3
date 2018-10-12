import React, { Component } from 'react';

class NewIdeaForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }

  }

  handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'title') {
      this.setState({ title: value })
    } else {
      this.setState({ body: value })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <input 
          type='text' 
          name='title' 
          value={this.state.title} 
          onChange={this.handleChange} 
        />
        <input 
          type='text' 
          name='body' 
          value={this.state.body} 
          onChange={this.handleChange} 
        />
        <button>Submit Idea</button>
      </form>
    )
  }
}

export default NewIdeaForm;
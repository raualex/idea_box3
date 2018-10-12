import React, { Component } from 'react';

class NewIdeaForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'title') {
      this.setState({ title: value })
    } else {
      this.setState({ description: value })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('handleSubmit')
    this.props.addIdea(this.state)
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit Idea</button>
      </form>
    )
  }
}

export default NewIdeaForm;
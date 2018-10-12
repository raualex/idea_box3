import React, { Component } from 'react';
import './App.css';
import NewIdeaForm from './NewIdeaForm.js'
import IdeaCardContainer from './IdeaCardContainer.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    // console.log('addIdea')
    let newIdea = {...idea, id: Date.now()}
    let ideas = [...this.state.ideas, newIdea]

    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter((idea) => {
      return idea.id !== id
    })
    this.setState({ideas})
  }

  render() {

    if (this.state.ideas.length) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>IdeaBox</h1>
          </header>
          <NewIdeaForm addIdea={this.addIdea} />
          <IdeaCardContainer ideas={this.state.ideas} removeIdea={this.removeIdea} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>IdeaBox</h1>
          </header>
          <NewIdeaForm addIdea={this.addIdea} />
        </div>
      );     
    }
  }
}

export default App;

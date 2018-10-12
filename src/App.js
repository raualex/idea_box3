import React, { Component } from 'react';
import './App.css';
import NewIdeaForm from './NewIdeaForm.js'
import IdeasContainer from './IdeasContainer.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter((idea) => {
      return idea.id !== id
    })
    this.setState({ ideas })
  }

  render() {
    const {ideas} = this.state

    if (ideas.length) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>IdeaBox</h1>
          </header>
          <NewIdeaForm addIdea={this.addIdea} />
          <IdeasContainer ideas={ideas} removeIdea={this.removeIdea} />
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

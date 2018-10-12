import React from 'react';
import IdeaCard from './IdeaCard.js';

const IdeaCardContainer = ({ideas, removeIdea}) => {

  const ideaCards = ideas.map((idea) => {
    return <IdeaCard key={idea.id} {...idea} removeIdea={removeIdea} />
  })

  return (
    <div className="card-container">
      { ideaCards }
    </div>
  )
}

export default IdeaCardContainer;
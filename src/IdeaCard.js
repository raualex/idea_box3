import React from 'react';

const IdeaCard = ({ title, description, id, removeIdea }) => {

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => removeIdea(id)}>X</button>
    </div>
  )

}

export default IdeaCard;
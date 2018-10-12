import React from 'react';

const IdeaCard = ({ title, body, id, removeIdea }) => {
  // console.log(removeIdea)
  return (
    <div key={id} className="ideaCard">
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}>X</button>
    </div>
  )
}

export default IdeaCard;
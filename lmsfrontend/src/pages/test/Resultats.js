import React from 'react'

const Resultats = ({ reponses }) => (
  <div>
      <h2>Résultats</h2>
      {reponses.map((item, index) => (
          <div key={index}>
              <p>Question {index + 1}: {item.question}</p>
              <p>Votre réponse: {item.userAnswer}</p>
              <p>Réponse correcte: {item.answer}</p>
          </div>
      ))}
  </div>
);

export default Resultats

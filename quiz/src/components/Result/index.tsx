import React from 'react';

import './styles.css';

interface ResultsProps {
    answers: string[];
    resetOnClick: () => void;
}

  
export const Results = (props: ResultsProps) => {
    return (
        <div>
            <h1>Resultados</h1>
            {props.answers.map((answer, index) => (
                <p key={`answer-${index}`}>{answer}</p>
            ))}
            <button onClick={props.resetOnClick}>Reiniciar</button>
        </div>
    );
};
import React, { useEffect } from 'react';

import './styles.css';

interface ResultsProps {
    answers: string[];
}

  
export const Results = (props: ResultsProps) => {
    return (
        <div>
            <h1>Resultados</h1>
            {props.answers.map((answer, index) => (
                <p key={`answer-${index}`}>{answer}</p>
            ))}
        </div>
    );
};
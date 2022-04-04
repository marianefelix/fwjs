import React, { Fragment } from 'react';

import './styles.css';

interface QuestionProps {
    statement: string;
    options: string[];
}
  
export const Question = (props: QuestionProps) => {
    return (
        <Fragment>
            <h1>{props.statement}</h1>
            {props.options.map((option, index) => (
                <button key={`button-${index}`}>{option}</button>
            ))}
        </Fragment>
    );
};
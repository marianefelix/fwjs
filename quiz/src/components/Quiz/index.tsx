import React, { Fragment, useState } from "react";
import { Question } from "../Question";
import { Result } from "../Result";

const questions = [
    {
        statement: 'Questão 1',
        options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4',]
    },
    {
        statement: 'Questão 2',
        options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4',]
    },
    {
        statement: 'Questão 3',
        options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4',]
    },
    {
        statement: 'Questão 4',
        options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4',]
    },
];

export const Quiz = () => {
    const showResults = true;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const confirm = () => {
        console.log('Confirmou');
        setCurrentQuestion((state) => state++);
    };

    return (
        <Fragment>
            {showResults
                ? (
                    <Fragment>
                        <Question 
                            statement={questions[currentQuestion].statement}
                            options={questions[0].options}
                        />
                        <button onClick={confirm}>Confirmar resposta</button>
                    </Fragment>
                )
                : <Result />
            }
        </Fragment>
    );
}
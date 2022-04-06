import React, { Fragment, useState } from "react";
import { Question } from "../Question";
import { Results } from "../Result";

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
    const [showResults, setShowResults] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    
    const confirm = () => {
        const newCurrentQuestion = currentQuestion + 1;

        if (newCurrentQuestion < questions.length) {
            setCurrentQuestion(newCurrentQuestion);
        } else {
            setShowResults(true);  
        }
    };

    const selectOption = (optionIndex: number) => {
        const answersCopy = [...answers];
        answersCopy[currentQuestion] = optionIndex;

        setAnswers(answersCopy);
    };

    const getAnswers = () => {
        const answersList = answers.map((optionSelectedIndex, index) => 
            questions[index].options[optionSelectedIndex]
        );

        return answersList;
    };

    return (
        <div>
            {showResults
                ? (
                    <Results answers={getAnswers()} />
                )
                : (
                    <Fragment>
                        <Question 
                            statement={questions[currentQuestion].statement}
                            options={questions[currentQuestion].options}
                            onSelection={selectOption}
                        />
                        <button onClick={confirm}>Confirmar resposta</button>
                    </Fragment>
                )
            }
        </div>
    );
}
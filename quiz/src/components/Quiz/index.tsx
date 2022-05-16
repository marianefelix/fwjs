import { Fragment, useState } from "react";
import { CustomButton } from "../CustomButton";
import { Question } from "../Question";
import { Results } from "../Result";

import "./styles.css";

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
    const [currentlySelectedOption, setCurrentlySelectedOption] = useState<undefined | number>();
    const [answers, setAnswers] = useState<number[]>([]);
    
    const confirm = () => {
        const newCurrentQuestion = currentQuestion + 1;

        if (newCurrentQuestion < questions.length) {
            setCurrentQuestion(newCurrentQuestion);
        } else {
            setShowResults(true);  
        }

        setCurrentlySelectedOption(undefined);
    };

    const selectOption = (optionIndex: number) => {
        const answersCopy = [...answers];
        answersCopy[currentQuestion] = optionIndex;

        setAnswers(answersCopy);
        setCurrentlySelectedOption(optionIndex);
    };

    const getAnswers = () => {
        const answersList = answers.map((optionSelectedIndex, index) => 
            questions[index].options[optionSelectedIndex]
        );

        return answersList;
    };

    return (
        <div className="quiz">
            {showResults
                ? (
                    <Results answers={getAnswers()} />
                )
                : (
                    <Fragment>
                        <h1>Quiz</h1>

                        <Question 
                            statement={questions[currentQuestion].statement}
                            options={questions[currentQuestion].options}
                            index={currentQuestion}
                            optionSelected={currentlySelectedOption}
                            onSelection={selectOption}
                        />
                        <CustomButton 
                            title="Confirmar resposta" 
                            onClick={confirm} 
                            disabled={currentlySelectedOption === undefined} 
                        />
                    </Fragment>
                )
            }
        </div>
    );
}
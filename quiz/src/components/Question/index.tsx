import { CustomButton } from '../CustomButton';
import { DescriptionContainer } from '../DescriptionContainer';
import { Enunciation } from '../Enunciation';

import './styles.css';

interface QuestionProps {
    statement: string;
    options: string[];
    index: number;
    optionSelected: number | undefined;
    onSelection: Function;
}
  
export const Question = (props: QuestionProps) => {
    return (
        <DescriptionContainer>
            <p>Questão {props.index + 1} de {props.options.length}</p>
            <Enunciation text={props.statement} />
            <div className="button-container">
                {props.options.map((option, index) => (
                    <CustomButton
                        key={`button-${index}`}
                        title={option}
                        selected={props.optionSelected === index}
                        onClick={() => props.onSelection(index)}
                    />
                ))}
            </div>
        </DescriptionContainer>
    );
};
import { CustomButton } from '../CustomButton';
import { DescriptionContainer } from '../DescriptionContainer';
import { Enunciation } from '../Enunciation';

import './styles.css';

interface QuestionProps {
    statement: string;
    options: string[];
    index: number;
    onSelection: Function;
}
  
export const Question = (props: QuestionProps) => {
    return (
        <DescriptionContainer>
            <p>Questão {props.index + 1} de {props.options.length}</p>
            <Enunciation text={props.statement} />
            {props.options.map((option, index) => (
                <CustomButton
                    key={`button-${index}`}
                    title={option}
                    selected
                    onClick={() => props.onSelection(index)}
                />
            ))}
        </DescriptionContainer>
    );
};
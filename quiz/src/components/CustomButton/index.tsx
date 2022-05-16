import { ButtonHTMLAttributes } from 'react';
import './styles.css';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean; 
}

export const CustomButton = (props: TabProps) => {
    const getState = () => {
        if (props.selected) {
            return ' selected';
        }

        return '';
    };

    return (
        <button
            className={`custom-button${getState()}`}
            type="button" 
            {...props}
        >
            {props.title}
        </button>
    );
}
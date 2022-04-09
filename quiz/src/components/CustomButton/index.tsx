import './styles.css';

interface TabProps {
    title: string;
    selected: boolean; 
    onClick: () => void;
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
            title={props.title} 
            onClick={props.onClick}
        >
            {props.title}
        </button>
    );
}
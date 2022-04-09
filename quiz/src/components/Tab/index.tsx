import './styles.css';

interface TabProps {
    title: string;
    onClick: () => void;
}

export const CustomButton = (props: TabProps) => {
    return (
        <button
            className="custom-button"
            type="button" 
            title={props.title} 
            onClick={props.onClick}
        >
            {props.title}
        </button>
    );
}
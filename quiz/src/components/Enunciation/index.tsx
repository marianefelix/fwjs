import './styles.css';

interface EnunciationProps {
    text: string;
}

export const Enunciation = ({ text }: EnunciationProps) => {
    return (
        <h2 className="enunciation-text">
            {text}
        </h2>
    );
};
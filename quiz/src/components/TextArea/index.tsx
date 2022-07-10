import { TextareaHTMLAttributes } from 'react';
import { Container, Small, StyledTextArea } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

export const TextArea = ({ errorMessage, ...props }: TextAreaProps) => {
  return (
    <Container>
      <StyledTextArea {...props} />
      {errorMessage && <Small>{errorMessage}</Small>}
    </Container>
  );
};
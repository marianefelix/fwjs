import { InputHTMLAttributes } from 'react';
import { Container, Small, StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const Input = ({ errorMessage, ...props }: InputProps) => {
  return (
    <Container>
      <StyledInput {...props} />
      {errorMessage && <Small>{errorMessage}</Small>}
    </Container>
  );
};
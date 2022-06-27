import { TextareaHTMLAttributes } from 'react';
import { StyledTextArea } from './styles';

export const TextArea = ({ ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <StyledTextArea {...props} />;
};
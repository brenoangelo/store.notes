import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface ITextAreaProps extends InputHTMLAttributes<
HTMLTextAreaElement>{
  name: string;
}

export function TextArea({ name ,...rest }: ITextAreaProps){
  return (
    <Container>
      <textarea name={name} {...rest}/>
    </Container>
  )
}
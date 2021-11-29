import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from 'react-icons/lib'


interface IInputProps extends InputHTMLAttributes<
HTMLInputElement>{
  name: string;
  type: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({ name, icon: Icon,...rest }: IInputProps) {
  return (
    <Container>
      {Icon && <Icon size={28} />}
      <input {...rest}/>
    </Container>
  )
}
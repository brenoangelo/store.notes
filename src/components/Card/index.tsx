import { Container } from "./styles";

interface Note {
  title: string;
  content: string;
  date: string;
}

interface ICardProps {
  note: Note;
}

export function Card({note}: ICardProps) {
  return (
    <Container>
      <h3>{note.title}</h3>
      <small>{note.date}</small>
      <p>{note.content}</p>
    </Container>
  )
}
import { useNotes } from "../../hooks/useNotes";
import { CloseButton, Container } from "./styles";

interface Note {
  id: number,
  title: string;
  content: string;
  createdAt: Date;
}

interface ICardProps {
  note: Note;
}

export function Card({note}: ICardProps) {
  const { handleRmvNote } = useNotes()
  return (
    <Container>
      <CloseButton
        onClick={() => handleRmvNote(note.id)}
      />
      <h3>{note.title}</h3>
      <small>{new Intl.DateTimeFormat('pt-BR').format(
        new Date(note.createdAt)
      )}</small>
      <p>{note.content}</p>
    </Container>
  )
}
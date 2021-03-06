import { FormEvent } from "react";
import { useNotes } from "../../hooks/useNotes";
import { Note } from "../../types";
import { TrashButton, Container } from "./styles";
interface ICardProps{
  note: Note;
  onClick: (event: FormEvent) => void;
}

export function Card({ note, ...rest }: ICardProps) {
  const { handleRmvNote } = useNotes()
  
  return (
    <Container {...rest} isSelected={note.isSelected}>
      <TrashButton
        onClick={(event) => handleRmvNote(note.id, event)}
      />
      <h3>{note.title}</h3>
      <small>{new Intl.DateTimeFormat('pt-BR').format(
        new Date(note.createdAt)
      )}</small>
      <p>{note.content}</p>
    </Container>
  )
}
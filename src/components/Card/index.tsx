import { useNotes } from "../../hooks/useNotes";
import { TrashButton, EditButton, Container } from "./styles";

interface Note {
  id: number,
  title: string;
  content: string;
  createdAt: Date;
  isSelected: boolean;
}

interface ICardProps{
  note: Note;
}

export function Card({ note, ...rest }: ICardProps) {
  const { handleRmvNote, handleEditNote } = useNotes()
  return (
    <Container {...rest} isSelected={note.isSelected}>
      <TrashButton
        onClick={() => handleRmvNote(note.id)}
      />
      
      <h3>
        <EditButton onClick={() => handleEditNote(note)}/> 
        {note.title}
      </h3>
      <small>{new Intl.DateTimeFormat('pt-BR').format(
        new Date(note.createdAt)
      )}</small>
      <p>{note.content}</p>
    </Container>
  )
}
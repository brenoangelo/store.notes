import { useNotes } from "../../hooks/useNotes";
import { Input } from "../Input";
import { Card } from "../Card";

import { CardsContainer, Container } from "./styles";

import { IoSearchOutline } from 'react-icons/io5'
import { Note } from "../../types";

export function Aside() {
  const { notes, handleEditNote } = useNotes()

  function sortNotes(a:Note, b:Note) {

    const aId = Number(a.id)
    const bId = Number(b.id)
    
    if(aId > bId){
      return -1
    }
    if(aId < bId){
      return 1
    }
    return 0
  }
  
  return (
    <Container>
      <Input 
        name="search" 
        placeholder="Search a note"
        type="text"
        icon={IoSearchOutline}
      />

      <CardsContainer>
        { notes ?
          notes.sort(sortNotes).map(note => (
            <Card 
              key={note.id}
              note={note} 
              onClick={() => handleEditNote(note)}
            />
          ))
          : 
          ''
        }
      </CardsContainer>
    </Container>
  )
}
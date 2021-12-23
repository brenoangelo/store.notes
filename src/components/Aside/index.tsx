import { useMemo, useState } from "react";
import { useNotes } from "../../hooks/useNotes";
import { Input } from "../Input";
import { Card } from "../Card";

import { CardsContainer, Container } from "./styles";
import noNotesFigure from '../../assets/img/no-notes.png'

import { IoSearchOutline } from 'react-icons/io5'
import { Note } from "../../types";

export function Aside() {
  const { notes, handleEditNote } = useNotes()
  const [noteSearched, setNoteSearched] = useState('')

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

  const notesFiltered = useMemo(() => {
    const noteSearchedLowerCase = noteSearched.toLowerCase()
    console.log(noteSearchedLowerCase)
    if(noteSearched.trim() === ''){
      return notes;
    }
    return notes.filter(note => note.title.toLowerCase().includes(noteSearchedLowerCase))
    
  }, [noteSearched, notes])
  
  return (
    <Container>
      <Input 
        name="search" 
        placeholder="Search a note"
        type="text"
        icon={IoSearchOutline}
        value={noteSearched}
        onChange={(event) => setNoteSearched(event.target.value)}
      />

      <CardsContainer>
        { notesFiltered.length ?
          notesFiltered.sort(sortNotes).map(note => (
            <Card 
              key={note.id}
              note={note} 
              onClick={() => handleEditNote(note)}
            />
          ))
          : 
          <figure>
            <figcaption>Não existem notas!</figcaption>
            <img src={noNotesFigure} alt="Figure" /> 
          </figure>
        }
      </CardsContainer>
    </Container>
  )
}
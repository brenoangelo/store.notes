import { useNotes } from "../../hooks/useNotes";
import { Input } from "../Input";
import { Card } from "../Card";

import { CardsContainer, Container } from "./styles";

import { IoSearchOutline } from 'react-icons/io5'

export function Aside() {
  const { notes } = useNotes()

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
          notes.map(note => (
            <Card note={note}/>
          )) 
          : 
          ''
        }
      </CardsContainer>
    </Container>
  )
}
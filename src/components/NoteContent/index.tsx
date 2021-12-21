import { FormEvent, useState, useEffect } from "react"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { 
  Container, 
  Header,
  ButtonAdd, 
  MainContent 
} from "./styles"

import { IoIosAddCircleOutline } from 'react-icons/io'
import { BsPen } from 'react-icons/bs'
import { useNotes } from "../../hooks/useNotes"

import { CardData } from "../../types"

const initialValues = {
  id: null,
  title: '',
  content: ''
}

export function NoteContent() {
  const { handleAddNote, handleEditNote, notes } = useNotes()
  const [cardData, setCardData] = useState<CardData>(initialValues)

  useEffect(() => {
    const isNoteSelected = notes.find(note => note.isSelected === true)

    isNoteSelected
      ? setCardData({
          id: isNoteSelected.id,
          title: isNoteSelected.title,
          content: isNoteSelected.content
        })

      : setCardData(initialValues)

  },[notes])

  function handleCreateNote(event: FormEvent) {
    event.preventDefault()

    handleAddNote({
      id: Date.now(),
      title: cardData.title,
      content: cardData.content,
      createdAt: new Date(),
      isSelected: false
    })
  }

  function handleModifyNote(event: FormEvent, cardData: CardData) {
    event.preventDefault()
    
    if(!cardData.id){
      return;
    }
    
    const cardDataUpdated = {
      id: cardData.id,
      title: cardData.title,
      content: cardData.content,
      createdAt: new Date(),
      isSelected: false
    }

    handleEditNote(cardDataUpdated)
  }

  return (
    <Container onSubmit={handleCreateNote}>
      <Header>
        
        <Input 
          name="title" 
          placeholder="Informe o titulo"
          type="text"
          onChange={e => setCardData({...cardData, title: e.target.value})}
          value={cardData.title}
          maxLength={35}
        />

        {cardData.id
          ? (
          <ButtonAdd
          onClick={(event) => handleModifyNote(event, cardData)}
          >
            <BsPen size="32"/>
          </ButtonAdd>
        ) : (
          <ButtonAdd
            onClick={handleCreateNote}
          >
            <IoIosAddCircleOutline size="32"/>
          </ButtonAdd> 
        )}
      </Header>

      <MainContent>
        <TextArea 
          name="conteudo"
          placeholder="conteudo..."
          onChange={e => setCardData({...cardData, content: e.target.value})}
          value={cardData.content}
        />
      </MainContent>
    </Container>
  )
}
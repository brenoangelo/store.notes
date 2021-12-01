import { FormEvent, useState } from "react"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { 
  Container, 
  Header,
  ButtonAdd, 
  MainContent 
} from "./styles"

import { IoIosAddCircleOutline } from 'react-icons/io'
import { useNotes } from "../../hooks/useNotes"

export function NoteContent() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { handleAddNote, notes } = useNotes()

  const noteSelected = notes.filter(note => note.isSelected === true)

  function handleCreateNote(event: FormEvent) {
    event.preventDefault()

    handleAddNote({
      id: Date.now(),
      title: title,
      content: content,
      createdAt: new Date(),
      isSelected: false
    })
  }

  return (
    <Container onSubmit={handleCreateNote}>
      <Header>
          <ButtonAdd
            onClick={handleCreateNote}
          >
            <IoIosAddCircleOutline size="32"/>
          </ButtonAdd>
        
        <Input 
          name="title" 
          placeholder="Informe o titulo"
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </Header>

      <MainContent>
        <TextArea 
          name="conteudo"
          placeholder="conteudo..."
          onChange={e => setContent(e.target.value)}
          value={content}
        />
      </MainContent>
    </Container>
  )
}
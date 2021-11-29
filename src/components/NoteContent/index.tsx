import { useState } from "react"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { 
  Container, 
  Header,
  ButtonAdd, 
  MainContent 
} from "./styles"

import { IoIosAddCircleOutline } from 'react-icons/io'

export function NoteContent() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <Container>
      <Header>
        <ButtonAdd>
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
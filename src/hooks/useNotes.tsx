import { createContext, FormEvent, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Note } from '../types';

interface NotesProviderProps {
  children: ReactNode;
}

interface NotesContextData {
  notes: Note[];
  handleAddNote: (note: Note) => void;
  handleRmvNote: (noteId: Number | null, event: FormEvent) => void;
  handleEditNote: (noteElement: Note) => void;
}

const NotesContext = createContext<NotesContextData>({} as NotesContextData)

export function NotesProvider({ children }: NotesProviderProps){
  const [notes, setNotes] = useState<Note[]>(() => {
    const storagedNote = localStorage.getItem('@notes');

    if (storagedNote) {
      return JSON.parse(storagedNote)
    }

    return []
  })

  function handleRmvNote(noteId: Number | null, event: FormEvent) {
    event.stopPropagation()

    if(!noteId){
      return;
    }
    
    const notesUpdated = notes
    const noteExists = notesUpdated.find(note => note.id === noteId)

    if(!noteExists) {
      toast.error('A Nota não existe.')
      return;
    }

    const notesFiltered = notesUpdated.filter(note => note.id !== noteExists.id)
    setNotes(notesFiltered)

    localStorage.setItem('@notes', JSON.stringify(notesFiltered))
    toast.success('Nota removida com sucesso!')
  }

  function handleAddNote(note: Note) {
    let notesUpdated = notes
    
    if(note.title.trim() === '') {
      toast.error('Título não pode ser vazio')
      return;
    }

    if(note.content.trim() === '') {
      toast.error('Conteúdo não pode ser vazio')
      return;
    }

    notesUpdated = [...notesUpdated, note]
    setNotes(notesUpdated)
    
    localStorage.setItem('@notes', JSON.stringify(notesUpdated))
    toast.success('Nota criada com sucesso!')
  }

  function handleEditNote(noteElement: Note) {
    
    let notesUpdated = [...notes]
    let noteExists = notesUpdated.find(note => note.id === noteElement.id)
    
    if(!noteExists){
      toast.error('A nota não existe')
      return;
    }

    const index = notesUpdated.findIndex(note => note.id === noteElement.id)
    noteExists = {...noteExists, isSelected: !noteExists.isSelected}
    
    notesUpdated.forEach(note => {
      note.isSelected = false
    })

    if(!noteElement.id){
      toast.error('A nota não existe')
      return;
    }

    if(noteElement.title.trim() === ""){
      toast.error('Título não pode ser vazio')
      return;
    }

    if(noteElement.content.trim() === ""){
      toast.error('Conteúdo não pode ser vazio')
      return;
    }

    if(noteExists.content !== noteElement.content
      || noteExists.title !== noteElement.title){
      noteExists = noteElement
      toast.success('Nota atualizada com sucesso!')
    }
    
    notesUpdated.splice(index, 1, noteExists)
    setNotes(notesUpdated)
    localStorage.setItem('@notes', JSON.stringify(notesUpdated))
    
  }

  return (
    <NotesContext.Provider 
      value={{notes, handleAddNote, handleRmvNote, handleEditNote}}
    >
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes(): NotesContextData {
  const context = useContext(NotesContext)

  return context
}
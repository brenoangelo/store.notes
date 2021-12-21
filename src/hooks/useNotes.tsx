import { createContext, FormEvent, ReactNode, useContext, useState } from 'react'
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
      return;
    }

    const notesFiltered = notesUpdated.filter(note => note.id !== noteExists.id)
    setNotes(notesFiltered)

    localStorage.setItem('@notes', JSON.stringify(notesFiltered))
  }

  function handleAddNote(note: Note) {
    let notesUpdated = notes
    
    notesUpdated = [...notesUpdated, note]
    setNotes(notesUpdated)
    
    localStorage.setItem('@notes', JSON.stringify(notesUpdated))
  }

  function handleEditNote(noteElement: Note) {
    
    let notesUpdated = [...notes]
    let noteExists = notesUpdated.find(note => note.id === noteElement.id)
    
    if(!noteExists){
      return;
    }

    if(noteExists.content !== noteElement.content
      || noteExists.title !== noteElement.title){
      noteExists = noteElement
    }

    const index = notesUpdated.findIndex(note => note.id === noteElement.id)
    noteExists = {...noteExists, isSelected: !noteExists.isSelected}
    
    notesUpdated.forEach(note => {
      note.isSelected = false
    })
    
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
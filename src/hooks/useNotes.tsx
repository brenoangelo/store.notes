import { createContext, FormEvent, ReactNode, useContext, useState } from 'react'

type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  isSelected: boolean;
}

interface NotesProviderProps {
  children: ReactNode;
}

interface NotesContextData {
  notes: Note[];
  handleAddNote: (note: Note) => void;
  handleRmvNote: (noteId: Number, event: FormEvent) => void;
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

  function handleRmvNote(noteId: Number, event: FormEvent) {
    event.stopPropagation()
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
    let notesUpdated = notes
    let noteExists = notesUpdated.find(note => note.id === noteElement.id)
    
    if(!noteExists){
      return;
    }

    const index = notesUpdated.findIndex(note => note.id === noteExists?.id)
    noteExists = {...noteExists, isSelected: !noteExists.isSelected}
    
    notesUpdated.forEach(note => {
      note.isSelected = false
    })
    
    notesUpdated.splice(index, 1, noteExists)
    setNotes(notesUpdated)
    localStorage.setItem('@notes', JSON.stringify(notesUpdated))
    console.log(notes)
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
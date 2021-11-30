import { createContext, ReactNode, useContext, useState } from 'react'

type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

interface NotesProviderProps {
  children: ReactNode;
}

interface NotesContextData {
  notes: Note[];
  handleAddNote: (note: Note) => void;
  handleRmvNote: (noteId: Number) => void;
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

  function handleAddNote(note: Note) {
    let notesUpdated = notes
    
    notesUpdated = [...notesUpdated, note]
    setNotes(notesUpdated)
    
    localStorage.setItem('@notes', JSON.stringify(notesUpdated))
  }

  function handleRmvNote(noteId: Number) {
    const notesUpdated = notes
    const noteExists = notesUpdated.find(note => note.id === noteId)

    if(!noteExists) {
      return;
    }

    const notesFiltered = notesUpdated.filter(note => note.id !== noteExists.id)
    setNotes(notesFiltered)

    localStorage.setItem('@notes', JSON.stringify(notesFiltered))
  }

  return (
    <NotesContext.Provider value={{notes, handleAddNote, handleRmvNote}}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes(): NotesContextData {
  const context = useContext(NotesContext)

  return context
}
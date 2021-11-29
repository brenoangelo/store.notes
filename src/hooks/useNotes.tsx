import { createContext, ReactNode, useContext, useState } from 'react'

type Note = {
  title: string;
  content: string;
  date: string;
}

interface NotesProviderProps {
  children: ReactNode;
}

interface NotesContextData {
  notes: Note[];
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

  return (
    <NotesContext.Provider value={{notes}}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes(): NotesContextData {
  const context = useContext(NotesContext)

  return context
}

export interface Note {
  id: number | null,
  title: string;
  content: string;
  createdAt: Date;
  isSelected: boolean;
}

export type CardData = Omit<Note, 'createdAt' | 'isSelected'>
import styled from 'styled-components'

import { BiTrashAlt } from 'react-icons/bi'

interface ContainerProps{
  isSelected: boolean;
}

export const Container = styled.a<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  padding: 1rem;

  border: 2px solid ${props => props.isSelected ? '#37FFCB' : 'transparent'};
  cursor: pointer;

  background: var(--light-yellow);
  margin-bottom: 1rem;

  transition: border, filter 0.3s;

  &:hover {
    border-color: var(--green);
    filter: brightness(0.97);
  }

  h3{
    position: relative;

    &:hover {
      svg{
        opacity: 1;
      }
    }
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`

export const TrashButton = styled(BiTrashAlt)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  color: #888;
  transition: color 0.3s;

  &:hover{
    color: var(--black);
  }
`


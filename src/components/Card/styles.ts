import styled from 'styled-components'

import { BiTrashAlt } from 'react-icons/bi'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  padding: 1rem;

  border: 2px solid transparent;
  cursor: pointer;

  background: var(--light-yellow);
  margin-bottom: 1rem;

  transition: border, filter 0.3s;

  &:hover {
    border-color: var(--green);
    filter: brightness(0.97);
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`

export const CloseButton = styled(BiTrashAlt)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  color: #888;
  transition: color 0.3s;

  &:hover{
    color: var(--black);
  }
`

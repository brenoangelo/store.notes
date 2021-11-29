import styled from 'styled-components'

export const Container = styled.div`
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
`

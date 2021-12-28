import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 0.5rem;

  svg {
    fill: #04020F;
  }

  input {
    line-height: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 0.75rem;

    width: 100%;

    border: 0;

    background: transparent;
    
    &:focus {
      outline: 0;
    }
  }
`
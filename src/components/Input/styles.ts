import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  svg {
    fill: #04020F;
  }

  input {
    line-height: 2.5rem;
    font-size: 1.5rem;
    padding-left: 0.75rem;

    border: 0;

    background: transparent;
    
    &:focus {
      outline: 0;
    }
  }
`
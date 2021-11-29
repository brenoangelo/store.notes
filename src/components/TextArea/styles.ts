import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 100%;
  textarea{
    background: transparent;
    flex: 100%;
    resize: none;
    padding: 0.75rem;

    border: 0;

    font-size: 1.4rem;

    &:focus {
      outline: 0;
    }
  }
`
import styled from "styled-components";

export const Container = styled.form`
  flex: 8;
  padding: 20px;
  background: var(--light-yellow);

  min-height: 42rem;

  -webkit-box-shadow: 0px 5px 15px 5px rgba(87,87,87,0.10); 
  box-shadow: 0px 5px 15px 5px rgba(87,87,87,0.10);

  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
`

export const ButtonAdd = styled.button`
  background: transparent;
  border: 0;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

export const MainContent = styled.div`
  flex: 100%;
  display: flex;
`
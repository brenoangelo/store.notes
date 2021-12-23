import styled from 'styled-components'

export const Container = styled.aside`
  flex: 3;
  padding: 20px;
  background: var(--white);

  min-height: 40rem;

  -webkit-box-shadow: 0px 5px 15px 5px rgba(87,87,87,0.28); 
  box-shadow: 0px 5px 15px 5px rgba(87,87,87,0.28);

  div:nth-of-type(2){
    margin-top: 1rem;
  }

  >div {
    padding-right: 1rem;
  }
`

export const CardsContainer = styled.div`
  overflow-y: auto;
  max-height: 35rem;
  min-height: 35rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  figure{
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      max-width: 15rem;
    }

    figcaption{
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
  background: var(--light-yellow);     
  }

  &::-webkit-scrollbar-thumb {
    background: var(--light-yellow);    
    border-radius: 20px;  
    border: 1px solid rgba(0,0,0, 0.3);
  }

`
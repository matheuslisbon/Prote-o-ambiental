import styled from 'styled-components'

const AdoteDiv = styled.div`
  margin-top: 64px;
  background: aqua;
  color:white;
  div{
    background: rgba(0,0,0,0.2); 
  }
  header{
    width: 94%;
    padding:20px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h1{
        align-self:center;
  }
  h2{
    align-self:center;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 20px;
  }
  ul{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border: 2px solid white;
    font-weight: 500;
    padding: 10px;
    line-height: 1.5;
  }
  button{
    border:1px solid white;
    width: 86px;
    height: 35px;
    font-weight: 500;
    border-radius: 4px;
    color:white;
    background: linear-gradient(to right, aqua, springgreen);
  }
  @media(max-width:600px){
    section{
      grid-template-columns: 1fr;
    }
  }

`

export default AdoteDiv
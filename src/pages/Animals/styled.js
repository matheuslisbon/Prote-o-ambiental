import styled from 'styled-components'

const AnimalsDiv = styled.div`
  width: 94%;
  margin: 0 auto; 
  margin-top: 35px;
  align-items:center;
  text-align:center;
  color: #454545;
  border-bottom: 3px solid aqua;

  header{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;

  }
  div{
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content:space-between;

  }
 
  h1.logo{
    font-size: 58px; 

    margin:auto;
    border-bottom: 3px solid aqua;
  }
  div button {

      margin: 20px 0; 
      margin-bottom: 39px;
      color: white;
      border: none;
      font-weight:bold;
      background: linear-gradient(to right, aqua, springgreen);
      padding: 10px 20px;
      border-radius: 4px;
      transition: 2s;
    
  }
  div button:hover {
    background: linear-gradient(to right,springgreen,aqua);
    border: 5px solid aquamarine;
  }
  @media(max-width:1200px){
    header{
      grid-template-columns: 1fr 1fr;
    }
  }
  @media(max-width:790px){
    header{
      grid-template-columns: 1fr;
    }
  }
`
export default AnimalsDiv
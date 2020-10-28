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

`
export default AnimalsDiv
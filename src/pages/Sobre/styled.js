import styled from 'styled-components'

const SobreDiv = styled.div`
  color:white;

  background: rgba(0,0,0,0.6); 
  backdrop-filter: saturate(180%) blur(3px);

  margin-top: 70px;
  line-height: 1.3;
  font-weight: 500;
  div{
    width: 90%;
    margin: 0 auto;
  }
  h1{
    font-size: 48px;
    font-weight: bold;
  }
  h2 {
    font-size: 36px;
  }
  li{
    list-style-type: disc;
  }
`

export default SobreDiv
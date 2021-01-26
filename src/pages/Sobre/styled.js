import styled from 'styled-components'

const SobreDiv = styled.div`
background-image: url('https://images.freeimages.com/images/large-previews/44c/blue-and-yellow-macaw-1641749.jpg');
background-size: 100% 100%;
background-repeat:no-repeat;
header{
    color:white;

  background: rgba(0,0,0,0.6); 
  backdrop-filter: saturate(180%) blur(10px);

  margin-top: 65px;
  line-height: 1.3;
  font-weight: 500;
}

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
  @media(max-width:700px){

  }
`

export default SobreDiv
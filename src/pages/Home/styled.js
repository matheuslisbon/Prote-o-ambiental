import styled from 'styled-components'

const HomeDiv = styled.div`
  background-image: url('https://images.freeimages.com/images/large-previews/44c/blue-and-yellow-macaw-1641749.jpg');
  background-size: 100% 100%;
  background-repeat:no-repeat;

  header{
  color: white;

/*   background:   #0AE0BD ; */ 
  font-size:  26px;
  display: flex;
  width: 40%;
  font-weight:500;
  min-width: 600px;
  padding: 20px;
  padding-top: 95px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.3 ;

  }

  h1{
    margin-bottom: 10px;
    font-weight:bold;
  }

  h2{
    margin-bottom: 5px;
    font-weight:bold;
  }


  @media(max-width:1000px){
    header{
      background: rgba(0,0,0,0.5);
      backdrop-filter: saturate(200%) blur(10px);
      width:100%;
      margin: 0 auto;
      font-size: 16px;
    }
  }


`

export default HomeDiv
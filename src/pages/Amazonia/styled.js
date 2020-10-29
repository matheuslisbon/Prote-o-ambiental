import styled from 'styled-components'

const AmazoniaDiv = styled.div`

article {
    background-image:url("https://www.observadorregional.com.br/wp-content/uploads/2019/08/queimada-amazonia.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 28px;
    display: flex;

  }
  div.back{
    display:flex;
    background: rgba(0,0,0, 0.6);
    backdrop-filter: saturate(200%) blur(10px);
  }
  article div.amazonia{
    padding: 20px;
    color: white;
    line-height: 1.3;

    width: 94%;
    margin: 20px auto;
    font-weight:500;
    border-radius: 20px;

  }
  article div.amazonia h1{
    font-weight:bold;
  }

  
  article div.fotos-amazonia{
    padding: 20px;
    color: white;
    margin: 20px;
    border-radius: 12px;
    width: 50%;
  }
  img {
    width: 100%;
    height: 50vh;
  }
  @media(max-width:900px){
    div.back{
      display:flex;
      flex-direction: column;
    }
    article div.fotos-amazonia{
      width: 90%;
      margin: 0 auto;
    }
  }
`
export default AmazoniaDiv
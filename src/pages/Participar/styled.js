import styled from 'styled-components'


const ParticiparDiv = styled.div`
  color: white;
  background-image:url("https://www.observadorregional.com.br/wp-content/uploads/2019/08/queimada-amazonia.jpg");
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100% 100%;
    font-size: 28px;
    line-height: 1.6;
    font-weight: 500;
    div{
      background: rgba(0,0,0,0.5);
      backdrop-filter: saturate(180%) blur(5px);
      width: 100%;
    }
    div article {
      width: 96%;
      margin: 0 auto;
      padding-top: 70px;
    }
    div article h1{
      font-size: 56px;
      font-weight: bold;
      padding-bottom: 15px;
    }
    div article h2{
      font-size: 46px;
      font-weight: bold;
      padding-bottom: 15px;
    }
    div article button{
      margin: 20px 0; 
      margin-bottom: 39px;
      color: #212121;
      border: none;
      font-weight:bold;
      background: aquamarine;
      padding: 10px 20px;
      border-radius: 4px;
    }
    @media(max-width:700px){
      div article h1{
        font-size: 32px;
      }
      div article h2{
        font-size: 28px;
      }
      div article p {
        font-size: 22px;
      }
    }

`
export default ParticiparDiv
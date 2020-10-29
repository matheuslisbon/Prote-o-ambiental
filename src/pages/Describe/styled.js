import styled from 'styled-components'

const DescribeDiv = styled.div`
  font-size: 16px;
  color: white;
  width: 96%;
  margin: 60px auto;
  margin-bottom: 20px;
  font-weight: 500;

  header{
    display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  }

  div.grid{ 
    padding: 20px;
    background-image: linear-gradient(to right, aqua , springgreen);
    border: 1px solid #00EB84cc;

    border-radius: 12px;
    
  }
  div.grid h1{
    font-size: 42px;
    margin-bottom: 12px;
    font-weight:bold;
    border-bottom: 1px solid white;
  }
  div.grid p {
    line-height: 1.5;
    font-size: 24px;
  }
  article {
    background-image:url("https://www.observadorregional.com.br/wp-content/uploads/2019/08/queimada-amazonia.jpg");
    background-repeat: no-repeat;
    background-size: 100% 50vh;
    font-size: 28px;

  }
  article div.amazonia{
    color: red;
  }
  @media(max-width:900px){
    header{
      grid-template-columns: 1fr;
    }
  }

`
export default DescribeDiv
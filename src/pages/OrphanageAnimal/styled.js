import styled from 'styled-components'


const OrphanageDiv = styled.div`
  color: white;
  padding-top: 70px;
  background: rgb(0,255,188);
  background: linear-gradient(90deg, rgba(0,255,188,1) 0%, rgba(0,235,225,1) 50%, rgba(0,185,255,1) 100%);
  
  header {
    background: rgba(250,250,250,0.3);
    backdrop-filter: saturate(180%) blur(10px);
  }
  header div {
    width: 90%;
    margin: 0 auto;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

  }
  article {
    width: 50%;
  }

  article ul{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  article ul li {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    color: #454545;
    font-size:24px;
    margin-bottom: 50px;

  } 
  article ul li h1{

    border-bottom: 3px solid white;
    border-top: 4px solid white;
    margin-bottom: 15px;
  }
  article ul li p{
    font-weight: 500;
  }

  article ul li img {
    width: 100%;
    height: 500px;
  }
  @media(max-width:950px){
    article{
      width:100%;
    }
    article ul li img{
      height: 50vh;
    }
  }
  @media(max-width:500px){
    article{
      width:100%;
    }
    article ul li img{
      height: 30vh;
    }
  }
  
  
`
export default OrphanageDiv
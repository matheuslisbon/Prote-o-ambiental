import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: sans-serif;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
    font-family: 'Montserrat', cursive;
  }
  body{
    height:100vh;
    font-family: 'Syne Tactile', cursive;
    width: 100%;
    background-image: url('https://images.freeimages.com/images/large-previews/44c/blue-and-yellow-macaw-1641749.jpg');
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
  }
  h1,
  ul,
  li{
    margin: 0;
    padding:0;
  }

`
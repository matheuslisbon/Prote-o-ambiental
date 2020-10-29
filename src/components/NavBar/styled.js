import styled from 'styled-components'

const NavBarDiv = styled.div`
  display: flex;  
  background: rgba(0,250,220,0.5);
  color: white;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: saturate(180%) blur(10px);
  text-align:center;
  padding: 6px 18px;
  border-bottom:5px solid #B2F0F0;
  font-weight: bold;
  font-size: 16px;
  position:fixed;
  width:100%; 
  top: 0;
  z-index: 999;
  .link-logo {
    font-size: 38px;
    color: white;
  }
  ul{
    display: flex;
  }
  .link{
    margin:0 12px;
    font-size: 26px;
    border-bottom: 2px solid white;
    text-decoration: none;
    color: white;

  }
  .link:hover{
    border-top: 2px solid white;
  }
`
export default NavBarDiv
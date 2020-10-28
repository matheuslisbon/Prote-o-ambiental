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

  ul{
    display: flex;
  }
  li{
    margin:0 12px;
    font-size: 24px;
    border-bottom: 2px solid white;
  }
`
export default NavBarDiv
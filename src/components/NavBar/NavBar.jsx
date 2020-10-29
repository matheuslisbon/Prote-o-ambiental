import NavBarDiv from './styled'
import {Link} from 'react-router-dom'

export default function NavBar (){
  return (
    <NavBarDiv>
        <h1><Link className='link-logo' to='/'>Nature</Link></h1>
        <div>
          <ul>
            <li><Link className='link' to='/'>Inicio</Link></li> 
            <li><Link className='link' to='/sobre'>Sobre</Link></li> 
            <li><Link className='link' to='/animais'>Animais</Link></li>
            <li><Link className='link' to='/participar'>Participar</Link></li>
            <li><Link className='link' to='/contato'></Link></li>
          </ul>
        </div>
        <h1><Link className='link-logo'>Adotar</Link></h1>
    </NavBarDiv>


  )
}


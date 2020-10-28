import NavBarDiv from './styled'
import {Link} from 'react-router-dom'

export default function NavBar (){
  return (
    <NavBarDiv>
        <h1>Nature</h1>
        <div>
          <ul>
            <Link to='/sobre'>Inicio</Link>
            <li>Sobre</li>
            <li>Animais</li>
            <li>Participar</li>
            <li>Contato</li>
          </ul>
        </div>
        <h1>Adotar</h1>
    </NavBarDiv>


  )
}


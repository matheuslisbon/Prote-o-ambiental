import {useState, useEffect} from 'react'
import axios from 'axios'
import AdoteDiv from './styled'

export default function Adote(){
  const [data, setData] = useState([])
  const url = 'http://localhost:3001/animals'

  useEffect(()=>{
    async function getData(){
      const response = await axios.get(url)
      setData(response.data)
    }
    getData()
  },[url])
  return (
    <AdoteDiv>
    <div>
      <header>
        <h1>Animais que estão esperando um lar</h1>
        <h1>Adote</h1>
        <h2>Animais disponiveis</h2>
     

      <section>

      {data.map(res =>(
        <ul key={res.id}>
                  <li>Nome: {res.nome}</li>
                  <li>Idade: {res.idade}</li>
                  <li>Especie: {res.especie}</li>
                  <li>Raca: {res.raca}</li>
                  <li>Dono: {res.dono}</li>
                  <button>Adotar</button>
        </ul>
      ))}

      </section>
 </header>

    </div>
    </AdoteDiv>
  )
}
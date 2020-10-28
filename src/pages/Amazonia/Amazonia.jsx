import AmazoniaDiv from "./styled"
import {Carousel} from 'react-bootstrap'

export default function Amazonia (){
  return (
  <AmazoniaDiv>
    <article>
      <div className='back'>

      <div className='amazonia'>
        <h1>
          Queimada na Amazonia
        </h1>
        <p>
          Em janeiro de 2020, 197 casos de focos de incêndio foram registrados. Já em fevereiro, foram 73 focos contabilizado pelo Inpe.
          O número, segundo o levantamento feito pelo Inpe, representa o maior índice registrado desde 2016, quando o recorde de 906 focos foi constatado. Nos anos seguintes, foram 83 em 2017, 139 em 2018 e 125 em 2019, no período entre janeiro e fevereiro.
        </p> 
      </div>

        <div className='fotos-amazonia'>
          <h1>Fotos da queimada</h1>

        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.-gcm93yWCc-Ptn0s7nghkwHaE8?pid=Api&rs=1"
      alt="First slide"
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.cxEsRM7ziVymnkZsJaty7QHaE7?pid=Api&rs=1"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.71kiGQihYPQ3UR0naliBgwHaE7?pid=Api&rs=1"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
          Local: Amazonia, data : 2020
        </div>
      </div>
  </article>


  </AmazoniaDiv>
  )
  
}
import AnimalsDiv from './styled'

export default function Animals (){
  return (
    <AnimalsDiv className='animals-div'>
      <h1 className='logo'>Adoção de animais</h1>
      <header>
    <div>
      <img src="http://www.caosemdono.com.br/wp-content/uploads/2014/04/shutterstock_63667945ok1.jpg" alt=""/>
      <h1>Adote </h1>
      <h2>ADOTAR UM ANIMAL
É UM ATO DE AMOR.</h2>
      <p>Agradecemos seu interesse em adotar um cão sem dono. Prepare-se para uma experiência gratificante que durará muitos anos.</p>
      <button>ADOTAR</button>
    </div>

    <div>
      <img src="http://www.caosemdono.com.br/wp-content/uploads/2011/09/banner-3.jpg" alt=""/>
      <h1>Apadrinhe</h1>
      <h2>SEJA UM COLABORADOR FIXO</h2>
      <p>O apadrinhamento de um cão é uma forma de conseguirmos recursos fixos para ajudar na tarefa diária de cuidar de nossos animais, além de ter mais tranquilidade e poder planejar melhor nossas ações.</p>
      <button>ADOTAR</button>
    </div>

    <div>
      <img src="http://www.caosemdono.com.br/wp-content/uploads/2011/09/banner-1.jpg" alt=""/>
      <h1>Doações </h1>
      <h2>COMO AJUDAR </h2>
      <p>Existem muitas formas de nos ajudar a cuidar dos mais de 450 cães que estão abrigados em nossos lares Transitórios, fora os cães que ajudamos a sustentar de outros protetores.</p>
      <button>ADOTAR</button>
    </div>
      </header>

  </AnimalsDiv>
  )
}
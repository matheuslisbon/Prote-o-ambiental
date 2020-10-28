import Amazonia from '../Amazonia/Amazonia'
import DescribeDiv from './styled'
import Animals from '../Animals/Animals';

export default function Describe(){
  return (
    <> 
  <Animals/>
    <DescribeDiv>  
      <header>
 
      <div className='grid'> 
        <h1>Você tem poder</h1>
        <p>
          Se você acredita em um mundo saudável, pacífico, digno e justo para todos, então estamos ao seu lado para alcançá-lo, seja agindo nas ruas, na internet, em pequenas comunidades, nas grandes salas do poder ou nos locais mais remotos do planeta. Se tem ideias para chegarmos lá mais rápido, queremos aprender com você. Vamos sonhar, planejar e agir juntos.
        </p>
      </div> 

      <div className='grid'>
        <h1>Mude o mundo</h1>
        <p>
          Atuamos na defesa do planeta por diferentes meios, promovendo conhecimento e conscientização pública, mobilização social e articulação política para diversas causas, sempre de forma independente. Só assim podemos denunciar os crimes ambientais e confrontar governos e empresas que ameaçam o meio ambiente. Conheça o trabalho que realizamos no Brasil.
        </p>
      </div>
    

      </header>  



  </DescribeDiv>

 <Amazonia/>

  </>
  )
}
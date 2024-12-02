//import imagem from '../../assets/pessoaComLivros.png'
import desenhoComunidade from '../../assets/community.png'
import desenhoPessoaLendo from '../../assets/pessoaLendo.png'
import desenhoPessoas from '../../assets/transform.png'
import balanca from '../../assets/balance.png'
import s from './inicio.module.scss'

export default function Inicio(){
  return (
    <section>  
      <section className= {s.conteinerInicio}>
        <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
      </section>

      <main className={s.cardsMain}>
   
        <h1 >Por que devo doar?</h1>
      
        <section className={s.sectionCards}>

        <div className={s.cardInformativo}>
        <img src={desenhoComunidade} alt="desenho representando comunidade" />  
        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </div>

        <div className= {s.cardInformativo}>
        <img src={desenhoPessoaLendo} alt="desenho Pessoa Lendo um livro" />  
        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </div>

        <div className= {s.cardInformativo}>
        <img src={desenhoPessoas} alt="desenho ilustrando pesseoas conectadas por linhas a um punho fechado " />  
        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </div>

        <div className={s.cardInformativo}>
        <img src={balanca} alt="desenho de uma balanca " />  
        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </div>

        </section>


      </main>

    </section>
        

  )
    
}

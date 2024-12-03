import styleQueroDoar from './queroDoar.module.scss'
import livroazul from '../../assets/icones_queroDoar/livrodoForm.png'

export default function QueroDoar(){
    return (
      <section className= {styleQueroDoar.conteinerQuerodoar}>
        <h1>Por favor, preencha o formulário com suas informações e as informações do Livro</h1>

        <section>

          <form className={styleQueroDoar.formulario}>
            
            <img src={livroazul} alt="Desenho de um livro" />
            
            <input type="text" name="titulo" id="" placeholder="Titulo"/>
            <input type="text" name="categoria" id="" placeholder="Categoria"/>
            <input type="text" name="autor" id="" placeholder="Autor"/>
            <input type="url" name="LinkImagem" id="" placeholder="Link da imagem"/>
            <input type="submit" value="" placeholder="Doar" />
          </form>
        </section>

      </section>
    )
    
  }
  //<h2>Informações do Livro</h2>
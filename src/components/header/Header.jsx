import logoLivro from '../../assets/logoLivro.png'
import search from '../../assets/search.png'
import s from './header.module.scss'
import {  BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Inicio from '../../pages/inicio/Inicio';
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados';
import QueroDoar from '../../pages/queroDoar/QueroDoar';

export default function Header(){
    return(

        <BrowserRouter>
            
            <header className= {s.conteinerHeader}>
                <section className= {s.imagelogoLivro}>
                    <img src={logoLivro} alt="Imagem logo de um livro aberto" />
                    <h2>Livros Vai Na Web</h2>
                </section>
                
                <nav className= {s.navHeader}>
                    <ul>
                        <li>
                            <Link className={s.link} to="/">Início</Link>
                        </li>
                            <Link className={s.Link} to= "/livrosDoados">Livros Doados</Link>
                        <li>
                            <Link className= {s.link} to="/queroDoar" >Quero Doar </Link>
                        </li>
                    </ul>
                </nav>

                <section className= {s.areaDeProcura}>
                <input type="search" name="" id="" placeholder='O que voce procura?' />
                <button><img src={search}  alt="imagem de uma lupa simbolizando pesquisa" /></button>               
                </section>
            
            </header>
            
            
            <Routes>
                <Route path='/' element= {<Inicio />}/>
                <Route path='/livrosDoados' element= {<LivrosDoados />}/>
                <Route path = '/queroDoar' element= {<QueroDoar />}/>
            </Routes>
            
        </BrowserRouter>

       

        



        
       
    )
}
import styled from 'styled-components';
import { livros } from './DadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from "../../imagens/livro2.png";


const UltimosLancamentoContainer = styled.section`
      background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentoContainer>
      <Titulo cor="#EB9B00"
        tamanhoFonte="36px">
        Últimos lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} key={livro.id} />
        ))}
      </NovosLivrosContainer>

      <CardRecomenda 
        titulo="Talvez você se interesse por"
        subTitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />

      <CardRecomenda 
        titulo="Talvez você se interesse na Alura"
        subTitulo="Angular 12"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentoContainer>
  )
}

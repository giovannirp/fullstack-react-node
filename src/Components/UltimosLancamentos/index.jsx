import styled from 'styled-components';
import { livros } from './DadosUltimosLancamentos';

const UltimosLancamentoContainer = styled.section`
      background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentoContainer>
      <Titulo>ultimos lancamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} key={livro.id} />
        ))}
      </NovosLivrosContainer>
   
    </UltimosLancamentoContainer>
  )
}

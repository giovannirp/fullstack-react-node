import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
// import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

export default function Pesquisa() {
  const [livrosPesquisado, setLivrosPesquisado] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const livrosAPI = getLivros()
    setLivros(livrosAPI)
  }, [])

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
          setLivrosPesquisado(resultadoPesquisa);
        }}
      />
      {livrosPesquisado.map((livro) => (
        <Resultado key={livro.nome}>
          <p>{livro.nome}</p>
          <img src={livro.src} />
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

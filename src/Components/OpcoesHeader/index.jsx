import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const Opcoes = styled.ul`
  display: flex;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTES"];

export default function OpcaoHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Opcao className="opcao" key={index}>
          <Link to={`/${texto.toLowerCase()}`}>
            <p>{texto}</p>
          </Link>
        </Opcao>
      ))}
    </Opcoes>
  );
}

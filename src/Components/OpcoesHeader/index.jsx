import styled from "styled-components";

const textoOpcoes = ["Categorias", "Favoritos", "Minhas Estante"];

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

export default function OpcaoHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Opcao className="opcao" key={index}>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

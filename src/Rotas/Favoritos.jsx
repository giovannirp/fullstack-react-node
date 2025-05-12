import Pesquisa from "../Components/Pesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);

  li {
    list-style: none;
  }
`;

function Favoritos() {
  return (
    <>
      <AppContainer>
        <Pesquisa />
      </AppContainer>
    </>
  );
}

export default Favoritos;

import Header from "./Components/Header";
import styled from "styled-components";
import Pesquisa from "./Components/Pesquisa";
import UltimosLancamentos from "./Components/UltimosLancamentos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Pesquisa />
        <UltimosLancamentos />
      </AppContainer>
    </>
  );
}

export default App;

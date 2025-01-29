import "./App.css";
import Logo from "./Components/Logo";
import perfil from "./imagens/perfil.svg";
import sacola from "./imagens/sacola.svg";

const textoOpcoes = ["Categorias", "Favoritos", "Minhas Estante"];
const icones = [perfil, sacola];

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Logo />
          <ul className="opcoes">
            {textoOpcoes.map((texto) => (
              <>
                <li className="opcao">
                  <p>{texto}</p>
                </li>
              </>
            ))}
          </ul>

          <ul className="icones">
            {icones.map((icone) => (
              <>
                <li className="icone"><img src={icone} alt="" /></li>
              </>
            ))}
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;

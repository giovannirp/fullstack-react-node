const textoOpcoes = ["Categorias", "Favoritos", "Minhas Estante"];
import "./style.css";

export default function OpcaoHeader() {
  return (
    <ul className="opcoes">
    {textoOpcoes.map((texto, index) => (
        <li className="opcao" key={index}>
          <p>{texto}</p>
        </li>
    ))}
  </ul>
  )
}

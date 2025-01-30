import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
const icones = [perfil, sacola];
import "./styles.css";

export default function IconesHeader() {
  return (
    <ul className="icones">
    {icones.map((icone, index) => (
      <li className="icone" key={index}><img src={icone} alt="" /></li>
    ))}
  </ul>
  )
}

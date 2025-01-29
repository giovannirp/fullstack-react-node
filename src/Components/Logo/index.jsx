import LogoIMG from "../../imagens/Logo.svg"
import "./style.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={LogoIMG} alt="" />
      <p>
        <strong>Alura</strong> Books
      </p>
    </div>
  );
}

import Logo from "../Logo";
import OpcaoHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import "./style.css";

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcaoHeader />
      <IconesHeader />
    </header>
  );
}

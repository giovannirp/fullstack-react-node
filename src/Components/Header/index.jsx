import Logo from "../Logo";
import OpcaoHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    border-bottom: 2px solid #fd8325;
  background: #fff;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcaoHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

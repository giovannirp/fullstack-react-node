import Logo from "../Logo";
import OpcaoHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #fff;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcaoHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

import styled from "styled-components";
import LogoIMG from "../../imagens/Logo.svg"

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  padding: 10px;

`;

const LogoImage = styled.img`
    margin-right: 10px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={LogoIMG} alt="" />
      <p>
        <strong>Alura</strong> Books
      </p>
    </LogoContainer>
  );
}

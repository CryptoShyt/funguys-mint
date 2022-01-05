import styled from "styled-components";
// import styles from "../../../public/styles.scss";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0.5rem 0;
  color: #efc046;
  font-size: 3rem;
  text-transform: uppercase;
  font-family: synthemesc;
`;

const Divider = styled.div`
  height: 3px;
  width: 80%;
  background-color: #efc046;
`;

export function Header() {
  return (
    <Container>
      <Title>Mint Your FunGuys</Title>
      <Divider />
    </Container>
  );
}

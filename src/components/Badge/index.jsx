import { Container } from "./styles";

export const Badge = ({ icon: Icon, children }) => {
  return (
    <Container>
      {!!Icon && <Icon />}

      {children}
    </Container>
  );
}
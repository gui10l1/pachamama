import { Container, Content, Toggler } from "./styles";

import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg';
import { useCallback, useState } from "react";

export const Faq = ({ title, children }) => {
  const [opened, setOpened] = useState(false);

  const handleOpenDropdown = useCallback(() => {
    setOpened(oldState => !oldState);
  }, []);

  return (
    <Container>
      <Toggler onClick={handleOpenDropdown} opened={opened}>
        {title}

        <img src={opened ? minusIcon : plusIcon} alt="Control" />
      </Toggler>

      <Content opened={opened}>{children}</Content>
    </Container>
  );
}
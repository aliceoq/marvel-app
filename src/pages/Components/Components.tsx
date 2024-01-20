import Button from "../../components/Button";
import Header from "../../components/Header";
import { MoonIcon } from "../../components/Icon";
import TextInput from "../../components/TextInput";
import { Container, Content, ContentSection, Flex } from "./styles";

const ComponentsPage = () => {
  return (
    <Container>
      <Header>
        <Button>Primary</Button>
        <Button>Primary</Button>
      </Header>
      <Content>
        <h1>Components</h1>
        <ContentSection>
          <h2>Text Input</h2>
          <TextInput
            label="Text input"
            helpMessage="Não use caracteres especiais"
          />
        </ContentSection>
        <ContentSection>
          <h2>Button</h2>
          <h3>Button - appearance</h3>
          <Flex>
            <Button>Primary</Button>
            <Button appearance="secondary">Secondary</Button>
            <Button appearance="link">Link</Button>
          </Flex>
          <h3>Button - spacing</h3>
          <Flex>
            <Button>Default</Button>
            <Button spacing="compact">Compact</Button>
            <Button spacing="none">None</Button>
          </Flex>
          <h3>Button - full width</h3>
          <Button fullWidth>Full width</Button>
          <h3>Button - with Icon</h3>
          <Button Icon={MoonIcon}>Clique aqui</Button>
        </ContentSection>
      </Content>
    </Container>
  );
};

export default ComponentsPage;

import Button from "../../components/Button";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  CaretLeftIcon,
  CaretRightIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "../../components/Icon";
import LargeCard from "../../components/LargeCard";
import Listing from "../../components/Listing";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import TextInput from "../../components/TextInput";
import { Item } from "../../types";
import { Container, Content, ContentSection, Flex } from "./styles";

const MockItems: Item[] = [
  {
    name: "Item  1",
    id: "123",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail: {
      path: "/public/Marvel_Logo",
      extension: "png",
    },
  },
  {
    name: "Item  2",
    id: "123",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail: {
      path: "/public/Marvel_Logo",
      extension: "png",
    },
  },
  {
    name: "Item  3",
    id: "123",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail: {
      path: "/public/Marvel_Logo",
      extension: "png",
    },
  },
];

const ComponentsPage = () => {
  return (
    <Container>
      <Header>
        <Button>Header Child 1</Button>
        <Button>Header Child 2</Button>
      </Header>
      <Content>
        <h1>Components</h1>
        <ContentSection>
          <h2>Header (acima)</h2>
          <p>O header possui position fixed.</p>
        </ContentSection>
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
        <ContentSection>
          <h2>Dropdown</h2>
          <Flex>
            <Dropdown Icon={CaretLeftIcon} name="Dropdown">
              <div>Child 1</div>
              <div>Child 2</div>
              <Button>Child 3</Button>
            </Dropdown>
            <Dropdown
              appearance={"primary"}
              direction="left"
              Icon={CaretLeftIcon}
              name="Dropdown"
            >
              <div>Child 1</div>
              <div>Child 2</div>
              <Button>Child 3</Button>
            </Dropdown>
          </Flex>
        </ContentSection>
        <ContentSection>
          <h2>Icons</h2>
          <Flex>
            <MoonIcon />
            <SunIcon />
            <CaretLeftIcon />
            <CaretRightIcon />
            <MenuIcon />
          </Flex>
        </ContentSection>
        <ContentSection>
          <h2>Card</h2>
          <Card
            imageURL={"/public/Marvel_Logo.png"}
            title={"Título do card"}
            onClick={() => alert("onClick")}
          />
        </ContentSection>
        <ContentSection>
          <h2>Large Card</h2>
          <LargeCard
            imageURL={"/public/Marvel_Logo.png"}
            title={"Título do card"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ligula id lorem fringilla dapibus. Aliquam suscipit congue mi id commodo. Etiam congue ac erat eget tristique. Cras laoreet arcu non sapien maximus, nec luctus enim tempor. Vestibulum efficitur turpis ex, eu euismod sem maximus eu. Praesent tincidunt lacus ac sem finibus, eu viverra velit lacinia. Nulla facilisi. Integer dignissim ut quam non pharetra. "
            }
          />
        </ContentSection>
        <ContentSection>
          <h2>Card Listing</h2>
          <Listing
            page={0}
            totalPages={0}
            items={MockItems}
            onPageChange={(page) => alert("onPageChange: " + page)}
            onItemClick={() => alert("onClick")}
          ></Listing>
        </ContentSection>
        <ContentSection>
          <h2>Pagination</h2>
          <Pagination
            totalPages={10}
            currentPage={5}
            onPageChange={(page) => alert("onPageChange: " + page)}
          />
        </ContentSection>
        <ContentSection>
          <h2>Spinner</h2>
          <Spinner />
        </ContentSection>
        <ContentSection>
          <h2>Footer</h2>
          <Footer>
            <div>Child 1</div>
            <div>Child 2</div>
          </Footer>
        </ContentSection>
      </Content>
    </Container>
  );
};

export default ComponentsPage;

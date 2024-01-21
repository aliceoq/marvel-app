import { Character, Item, QueryResult } from "../../types";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import LargeCard from "../../components/LargeCard";
import { CardContainer, Container, SpinnerContainer } from "../styles";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

function CharacterPage() {
  const navigate = useNavigate();
  const id = useParams()["id"] ?? "";

  const [character, setCharacter] = useState<Character | undefined>(
    useLocation().state?.character ?? undefined
  );
  const [comics, setComics] = useState<Item[]>([]);
  const { refetch } = useQuery<QueryResult<Character>>({
    queryKey: ["characters", "GET", { params: { id } }],
    enabled: false,
  });

  const comicQueriesResults: { data: QueryResult<Item>; isLoading: boolean }[] =
    useQueries({
      queries:
        character?.comics.items.map((comic) => {
          return {
            queryKey: [
              "comics",
              "GET",
              { params: { id: comic.resourceURI.split("/").pop() } },
            ],
            enabled: character !== undefined,
          };
        }) ?? [],
    });

  const isLoading = comicQueriesResults.some((result) => result.isLoading);

  useEffect(() => {
    async function refetchCharacter() {
      setCharacter((await refetch()).data?.data.results[0]);
    }
    if (!character) refetchCharacter();
  }, [id]);

  useEffect(() => {
    if (!isLoading) {
      const newComics = comicQueriesResults.map(
        (query) => query.data?.data?.results[0]
      );
      setComics(newComics);
    }
  }, [isLoading]);

  if (!character) return <div></div>;

  return (
    <Container>
      <Button onClick={() => navigate("/characters/")}>
        Ir para a página de personagens
      </Button>
      <LargeCard
        imageURL={
          character.thumbnail.path + "." + character.thumbnail.extension
        }
        title={character.name ?? "Sem nome"}
        description={character.description}
      />
      <h2>Quadrinhos</h2>
      {isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {!isLoading && comics.length > 0 ? (
        <CardContainer>
          {comics.map((item, index) => (
            <Card
              key={index}
              imageURL={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              title={item.title ?? "Sem nome"}
              onClick={() => {
                navigate(`/comics/${item.id}`);
              }}
            />
          ))}
        </CardContainer>
      ) : (
        !isLoading && "Esse personagem não tem quadrinhos relacionados."
      )}
    </Container>
  );
}

export default CharacterPage;

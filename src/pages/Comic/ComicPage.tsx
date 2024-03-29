import { Comic, Item, QueryResult } from "../../types";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import LargeCard from "../../components/LargeCard";
import { CardContainer, Container, SpinnerContainer } from "../styles";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

function ComicPage() {
  const navigate = useNavigate();
  const id = useParams()["id"] ?? "";

  const [comic, setComic] = useState<Comic | undefined>(
    useLocation().state?.character ?? undefined
  );
  const [creators, setCreators] = useState<Item[]>([]);
  const [characters, setCharacters] = useState<Item[]>([]);
  const { refetch } = useQuery<QueryResult<Comic>>({
    queryKey: ["comics", "GET", { params: { id } }],
    enabled: false,
  });

  const creatorsQueriesResults: {
    data: QueryResult<Item>;
    isLoading: boolean;
  }[] = useQueries({
    queries:
      comic?.creators.items.map((creator) => {
        return {
          queryKey: [
            "creators",
            "GET",
            { params: { id: creator.resourceURI.split("/").pop() } },
          ],
          enabled: comic !== undefined,
        };
      }) ?? [],
  });

  const charactersQueriesResults: {
    data: QueryResult<Item>;
    isLoading: boolean;
  }[] = useQueries({
    queries:
      comic?.characters.items.map((character) => {
        return {
          queryKey: [
            "characters",
            "GET",
            { params: { id: character.resourceURI.split("/").pop() } },
          ],
          enabled: comic !== undefined,
        };
      }) ?? [],
  });

  const isLoadingCreators = creatorsQueriesResults.some(
    (result) => result.isLoading
  );

  const isLoadingCharacters = charactersQueriesResults.some(
    (result) => result.isLoading
  );

  useEffect(() => {
    async function refetchComic() {
      setComic((await refetch()).data?.data.results[0]);
    }
    if (!comic) refetchComic();
  }, [id]);

  useEffect(() => {
    if (!isLoadingCreators) {
      const newCreators = creatorsQueriesResults.map(
        (query) => query.data?.data?.results[0]
      );
      setCreators(newCreators);
    }
  }, [isLoadingCreators]);

  useEffect(() => {
    if (!isLoadingCharacters) {
      const newCharacters = charactersQueriesResults.map(
        (query) => query.data?.data?.results[0]
      );
      setCharacters(newCharacters);
    }
  }, [isLoadingCharacters]);

  if (!comic) return <div></div>;

  return (
    <Container>
      <Button onClick={() => navigate("/comics/")}>
        Ir para a página de quadrinhos
      </Button>
      <LargeCard
        imageURL={comic.thumbnail.path + "." + comic.thumbnail.extension}
        title={comic.title ?? "Sem nome"}
        description={comic.description}
      />
      <h2>Criadores</h2>
      {isLoadingCreators && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {!isLoadingCreators && creators.length > 0 ? (
        <CardContainer>
          {creators.map((item, index) => (
            <Card
              key={index}
              imageURL={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              title={item.title ?? item.name ?? item.fullName ?? "Sem nome"}
              onClick={() => navigate(`/creators/${item.id}`)}
            />
          ))}
        </CardContainer>
      ) : (
        !isLoadingCreators && "Esse quadrinho não tem criadores relacionados."
      )}
      <h2>Personagens</h2>
      {isLoadingCharacters && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {!isLoadingCharacters && characters.length > 0 ? (
        <CardContainer>
          {characters.map((item, index) => (
            <Card
              key={index}
              imageURL={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              title={item.title ?? item.name ?? item.fullName ?? "Sem nome"}
              onClick={() => navigate(`/characters/${item.id}`)}
            />
          ))}
        </CardContainer>
      ) : (
        !isLoadingCharacters &&
        "Esse quadrinho não tem personagens relacionados."
      )}
    </Container>
  );
}

export default ComicPage;

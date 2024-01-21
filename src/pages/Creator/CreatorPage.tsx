import { Creator, Item, QueryResult } from "../../types";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import LargeCard from "../../components/LargeCard";
import { CardContainer, Container, SpinnerContainer } from "../styles";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

function CreatorPage() {
  const navigate = useNavigate();
  const id = useParams()["id"] ?? "";

  const [creator, setCreator] = useState<Creator | undefined>(
    useLocation().state?.creator ?? undefined
  );
  const [comics, setComics] = useState<Item[]>([]);
  const { refetch } = useQuery<QueryResult<Creator>>({
    queryKey: ["creators", "GET", { params: { id } }],
    enabled: false,
  });

  const comicQueriesResults: { data: QueryResult<Item>; isLoading: boolean }[] =
    useQueries({
      queries:
        creator?.comics.items.map((comic) => {
          return {
            queryKey: [
              "comics",
              "GET",
              { params: { id: comic.resourceURI.split("/").pop() } },
            ],
            enabled: creator !== undefined,
          };
        }) ?? [],
    });

  const isLoading = comicQueriesResults.some((result) => result.isLoading);

  useEffect(() => {
    async function refetchCreator() {
      setCreator((await refetch()).data?.data.results[0]);
    }
    if (!creator) refetchCreator();
  }, [id]);

  useEffect(() => {
    if (!isLoading) {
      const newComics = comicQueriesResults.map(
        (query) => query.data?.data?.results[0]
      );
      setComics(newComics);
    }
  }, [isLoading]);

  if (!creator) return <div></div>;

  return (
    <Container>
      <Button onClick={() => navigate("/creators/")}>
        Ir para a página de criadores
      </Button>
      <LargeCard
        imageURL={creator.thumbnail.path + "." + creator.thumbnail.extension}
        title={creator.fullName ?? "Sem nome"}
        description={creator.description}
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
        !isLoading && "Esse criador não tem quadrinhos relacionados."
      )}
    </Container>
  );
}

export default CreatorPage;

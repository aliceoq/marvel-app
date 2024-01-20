import { Item, QueryResult } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { FormEvent, useState } from "react";
import TextInput from "../../components/TextInput";
import Listing from "../../components/Listing";
import Button from "../../components/Button";
import { Flex, FlexColumn, Form } from "./styles";

function Characters() {
  const navigate = useNavigate();
  const itemsPerPage = 15;
  const page = parseInt(useParams()["page"] ?? "1") - 1;
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = new URLSearchParams(location.search);

  const { data: requestData } = useQuery<QueryResult<Item>>({
    queryKey: [
      "characters",
      "GET",
      {
        params: {
          limit: itemsPerPage,
          offset: itemsPerPage * page,
          ...(searchParams && { nameStartsWith: searchParams.get("s") }),
        },
      },
    ],
    enabled: true,
  });

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate({
      pathname: "/characters/page/1/",
      search: createSearchParams({
        ...(searchTerm && { s: searchTerm }),
      }).toString(),
    });
  }

  return (
    <FlexColumn>
      <h1>Lista de personagens</h1>
      <Flex>
        <Form onSubmit={handleSearch}>
            <TextInput
              placeholder="Busque por nome..."
              value={searchTerm}
              required
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button>Buscar</Button>
        </Form>
        <Button appearance="secondary" onClick={() => navigate('/characters')}>Ver todos</Button>
      </Flex>
      <Listing
        page={Math.ceil((requestData?.data.offset ?? 0) / itemsPerPage) + 1}
        totalPages={Math.ceil((requestData?.data.total ?? 0) / itemsPerPage)}
        items={requestData?.data.results ?? []}
        onPageChange={(newPage) =>
          navigate(`/characters/page/${newPage}/?${searchParams}`)
        }
        onItemClick={(item) =>
          navigate(`/characters/${item.id}`, { state: { item } })
        }
      />
    </FlexColumn>
  );
}

export default Characters;

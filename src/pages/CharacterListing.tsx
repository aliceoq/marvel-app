import { Character, QueryResult } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { FormEvent, useState } from "react";
import Pagination from "../components/Pagination";

function CharacterListing() {
  const navigate = useNavigate();
  const itemsPerPage = 9;
  const page = parseInt(useParams()["page"] ?? "1") - 1;
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = new URLSearchParams(location.search);

  const { data: requestData } = useQuery<QueryResult<Character>>({
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
    if (searchTerm.trim() !== "") navigate(`/characters/page/1/?s=${searchTerm}`);
    else navigate(`/characters/page/1/`);
  }

  return (
    <div>
      <h1>Lista de personagens</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite para buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Buscar</button>
      </form>
      {requestData &&
        requestData.data.results.map((character: Character, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/characters/${character.id}`, { state: { character } })
            }
          >
            <div>{character.name}</div>
            <div>{character.id}</div>
            <img
              style={{ width: "200px" }}
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
            ></img>
          </div>
        ))}
      <Pagination
        currentPage={Math.ceil((requestData?.data.offset ?? 0) / itemsPerPage) + 1}
        totalPages={
          requestData?.data.total
            ? Math.ceil(requestData?.data.total / itemsPerPage)
            : 0
        }
        onPageChange={(newPage) =>
          navigate(`/characters/page/${newPage}/?${searchParams}`)
        }
      />{" "}
    </div>
  );
}

export default CharacterListing;

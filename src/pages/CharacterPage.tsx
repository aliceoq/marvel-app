import { Character, QueryResult } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function CharacterPage() {
  const id = useParams()["id"] ?? "";

  const [character, setCharacter] = useState<Character | undefined>(
    useLocation().state?.character ?? undefined
  );
  const { refetch } = useQuery<QueryResult<Character>>({
    queryKey: ["characters", "GET", { params: { id } }],
    enabled: false,
  });

  useEffect(() => {
    async function refetchCharacter() {
      setCharacter((await refetch()).data?.data.results[0]);
    }
    if (!character) refetchCharacter();
  }, [id, character, refetch]);

  if (!character) return <div></div>;

  return (
    <div>
      <div>{character.name}</div>
      <img
        style={{ width: "200px" }}
        src={character.thumbnail.path + "." + character.thumbnail.extension}
      ></img>
    </div>
  );
}

export default CharacterPage;

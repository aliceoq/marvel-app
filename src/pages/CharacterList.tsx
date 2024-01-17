import { Character, QueryResult } from "../types";
import { useQuery } from "@tanstack/react-query";

function CharacterList() {
  const { data } = useQuery<QueryResult<Character>>({
    queryKey: ["characters", "GET", { params: { limit: 9, offset: 9 } }],
  });

  return (
    <div>
      <h1>Lista de personagens</h1>
      {data &&
        data.data.results.map((character: Character) => (
          <div>
            <div>{character.name}</div>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
            ></img>
            <div></div>
          </div>
        ))}
    </div>
  );
}

export default CharacterList;

import { useApi } from "./use-api.tsx";
import { useEffect, useState } from "react";
import { Character } from "../interfaces/character.ts";
import { BASE_URL, END_POINT } from "../constanst.ts";

interface UseSearchProps {
  query: string;
}

export const useSearchCharacters = ({ query }: UseSearchProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const { data, error, loading } = useApi({
    url: `${BASE_URL}${END_POINT.CHARACTER}?name=${query}`,
  });

  const { results } = (data as { results: Character[] }) ?? { results: [] };

  useEffect(() => {
    setCharacters(results);
  }, [data]);

  return { characters, error, loading };
};
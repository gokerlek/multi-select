import { Character } from "../interfaces/character.ts";
import { useCallback, useState, MouseEvent } from "react";
import { reject, equals } from "ramda";

export const useMultiSelectActions = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const toggleCharacterSelection = useCallback((character: Character) => {
    setSelectedCharacters((prev) => reject(equals(character), prev));
  }, []);

  const handleCharacterClick = useCallback(
    (e: MouseEvent, character: Character): void => {
      e.preventDefault();
      toggleCharacterSelection(character);
    },
    [],
  );

  return {
    handleCharacterClick,
    toggleCharacterSelection,
    selectedCharacters,
    setSelectedCharacters,
  };
};

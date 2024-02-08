import { Character } from "../interfaces/character.ts";
import { useCallback, useState } from "react";
import { reject, equals } from "ramda";
import { KeyboardEvent } from "react";

export const useMultiSelectActions = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const toggleCharacterSelection = useCallback((character: Character) => {
    setSelectedCharacters((prev) => reject(equals(character), prev));
  }, []);

  const handleCharacterClick = useCallback(
    (character: Character): void => {
      toggleCharacterSelection(character);
    },
    [toggleCharacterSelection],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "Backspace":
          if (
            event.currentTarget.value === "" &&
            selectedCharacters.length > 0
          ) {
            setSelectedCharacters((prev) => prev.slice(0, -1));
          }
          break;
        default:
          break;
      }
    },
    [selectedCharacters],
  );

  return {
    handleCharacterClick,
    handleKeyDown,
    toggleCharacterSelection,
    selectedCharacters,
    setSelectedCharacters,
  };
};

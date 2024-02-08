import { FC, useRef } from "react";
import { Combobox } from "@headlessui/react";
import { SelectedList } from "./selected-list.tsx";
import { Options } from "./options.tsx";
import { useMultiSelectActions } from "../../hooks/use-multi-select-actions.tsx";
import { ArrowButton } from "../arrow-button.tsx";
import { Character } from "../../interfaces/character.ts";

interface MultiSelectProps {
  characters: Character[];
  query: string;
  setQuery: (e: string) => void;
  loading: boolean;
  error?: string;
}

export const MultiSelect: FC<MultiSelectProps> = ({
  characters,
  query,
  setQuery,
  loading,
  error,
}) => {
  const { handleCharacterClick, selectedCharacters, setSelectedCharacters } =
    useMultiSelectActions();

  const ref = useRef<HTMLUListElement>(null);

  return (
    <Combobox
      value={selectedCharacters}
      multiple
      onChange={(value) => {
        setSelectedCharacters(value);
      }}
      by="id"
    >
      <div className="relative">
        <div
          className="relative flex flex-wrap items-start w-full cursor-default overflow-hidden
             rounded-2xl border border-gray-400 bg-white text-left
             shadow-md focus:outline-none focus-visible:ring-0 sm:text-sm gap-2 p-2 pr-6"
        >
          <SelectedList
            selectedCharacters={selectedCharacters}
            updateSelectedCharacters={handleCharacterClick}
          />

          <Combobox.Input
            value={query}
            className="min-w-16 flex-1 border-none py-1.5  pr-2 text-sm leading-5 text-gray-900 focus:ring-0"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />

          <ArrowButton />
        </div>

        <Options
          options={characters}
          query={query}
          ref={ref}
          loading={loading}
          error={error}
        />
      </div>
    </Combobox>
  );
};

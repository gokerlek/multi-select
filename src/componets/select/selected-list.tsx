import { isEmpty } from "ramda";
import { Combobox } from "@headlessui/react";
import { Character } from "../../interfaces/character.ts";
import { FC } from "react";
import cross from "../../assets/cross.svg";

interface SelectedListProps {
  selectedCharacters: Character[];
  handleCharacterClick: (character: Character) => void;
}
export const SelectedList: FC<SelectedListProps> = ({
  selectedCharacters,
  handleCharacterClick,
}) => {
  if (isEmpty(selectedCharacters)) {
    return null;
  }

  return selectedCharacters?.map((character) => {
    const { id, name } = character;

    return (
      <div
        key={id}
        className="flex items-center gap-1 bg-gray-300/80 rounded-lg pl-3 pr-2 py-1.5"
      >
        {name}
        <Combobox.Button
          className="bg-gray-400 hover:bg-red-500 focus:bg-red-500 text-white
          rounded w-5 h-5 flex items-center justify-center
          transition-colors duration-300 ease-in-out focus:outline-none "
          onClick={() => handleCharacterClick(character)}
        >
          <img src={cross} alt="close" />
        </Combobox.Button>
      </div>
    );
  });
};

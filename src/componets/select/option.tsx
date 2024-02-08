import { useEpisodeText } from "../../hooks/use-episode-text.tsx";
import { Combobox } from "@headlessui/react";
import clsx from "clsx";
import { Checkbox } from "../checkbox.tsx";
import { CharacterItem } from "../character-item.tsx";
import { FC, useCallback, useRef } from "react";
import { Character } from "../../interfaces/character.ts";

interface OptionProps {
  option: Character;
  query: string;
}

export const Option: FC<OptionProps> = ({ option, query }) => {
  const { name, episode, image } = option;

  const checkboxRef = useRef<HTMLInputElement>(null);

  const episode_text = useEpisodeText({
    episode,
  });

  const className = useCallback(
    ({ active }: { active: boolean }) =>
      clsx("relative cursor-default select-none p-2 pr-4 text-gray-700", {
        "bg-gray-200": active,
      }),
    [],
  );

  return (
    <Combobox.Option className={className} value={option}>
      {({ selected }) => (
        <div className="flex items-center gap-2">
          <Checkbox selected={selected} ref={checkboxRef} />

          <CharacterItem
            name={name}
            episode={episode_text}
            image={image}
            query={query}
          />
        </div>
      )}
    </Combobox.Option>
  );
};

import { FC, Fragment } from "react";
import { TextHighlighter } from "./text-highlighter.tsx";

interface CharacterItem {
  name: string;
  episode: string;
  image: string;
  query: string;
}

export const CharacterItem: FC<CharacterItem> = ({
  name,
  episode,
  image,
  query,
}) => {
  return (
    <Fragment>
      <img src={image} alt={""} className="w-10 h-10 rounded-md" />
      <div className="flex flex-col gap-1">
        <div className="text-lg text-gray-600 capitalize">
          <TextHighlighter name={name} query={query} />
        </div>
        <div className="text-sm text-gray-500 capitalize">{episode}</div>
      </div>
    </Fragment>
  );
};

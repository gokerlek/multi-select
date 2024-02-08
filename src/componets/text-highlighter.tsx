interface TextHighlighterParams {
  name: string;
  query: string;
}

export const TextHighlighter = ({ name, query }: TextHighlighterParams) => {
  const parts = name.split(new RegExp(`(${query})`, "gi"));

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <b key={i}>{part}</b>
        ) : (
          part
        ),
      )}
    </span>
  );
};

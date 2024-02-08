import "./App.css";
import { FC, useState } from "react";
import { MultiSelect } from "./componets/select/multi-select.tsx";
import { useSearchCharacters } from "./hooks/use-search.tsx";

const App: FC = () => {
  const [query, setQuery] = useState("");

  const handleSetQuery = (query: string) => {
    setQuery(query);
  };

  const { characters, error, loading } = useSearchCharacters({ query });

  return (
    <div className="min-h-screen p-5 bg-stone-50">
      <div className="fixed top-16 w-96">
        <MultiSelect
          characters={characters}
          query={query}
          setQuery={handleSetQuery}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default App;

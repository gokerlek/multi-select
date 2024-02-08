import { Combobox } from "@headlessui/react";
import { Character } from "../../interfaces/character.ts";
import { forwardRef, Ref } from "react";
import { isEmpty, isNotNil } from "ramda";
import { Option } from "./option.tsx";

interface OptionsProps {
  options: Character[];
  query: string;
  loading: boolean;
  error?: string;
}
export const Options = forwardRef<HTMLUListElement, OptionsProps>(
  ({ options, query, loading, error }, ref: Ref<HTMLUListElement>) => {
    return (
      <Combobox.Options
        ref={ref}
        className="absolute mt-3 py-1 max-h-96 w-full overflow-auto
        rounded-2xl border border-gray-400 divide-gray-400 divide-y bg-gray-50
        text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
      >
        {isEmpty(options) && !isEmpty(query) ? (
          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
            Nothing found.
          </div>
        ) : loading ? (
          <div>
            <div className="relative flex items-center justify-center cursor-default select-none px-4 py-2 text-gray-700 h-96">
              Loading...
            </div>
          </div>
        ) : isNotNil(error) ? (
          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
            {error}
          </div>
        ) : (
          options.map((option) => {
            return <Option key={option.id} option={option} query={query} />;
          })
        )}
      </Combobox.Options>
    );
  },
);

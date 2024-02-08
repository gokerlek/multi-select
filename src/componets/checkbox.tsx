// @ts-ignore
import { CheckboxProps } from "@headlessui/react/dist/components/checkbox/checkbox";
import { forwardRef } from "react";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ selected }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        checked={selected}
        readOnly
        className={
          "w-4 h-4  border border-gray-500 rounded text-gray-500 cursor-pointer appearance-none checked:accent-gray-500 checked:bg-gray-500 bg-white focus:outline-none focus:ring-transparent  checked:hover:bg-gray-600 checked:focus:outline-none checked:ring-transparent;"
        }
      />
    );
  },
);

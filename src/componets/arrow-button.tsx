import { FC } from "react";
import arrow from "../assets/arrow.svg";
import clsx from "clsx";
import { Combobox } from "@headlessui/react";

export const ArrowButton: FC = () => {
  return (
    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
      {({ open }) => (
        <img
          src={arrow}
          alt="arrow"
          className={clsx("transform transition-transform", {
            "rotate-180": open,
          })}
        />
      )}
    </Combobox.Button>
  );
};

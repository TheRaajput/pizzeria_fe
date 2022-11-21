import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GoChevronDown } from "react-icons/go";
interface Props {
  items: { id: string; name: string }[];
  defaultValue: string;
  id: string;
  onChange: (id: string, status: any) => void;
  status: string;
}
const CustomSelect = ({ items, defaultValue, onChange, id, status }: Props) => {
  return (
    <Listbox
      value={{ id: status.toLowerCase(), name: status }}
      defaultValue={items.find((item) => item.id === defaultValue)}
      onChange={(ev) => {
        onChange(id, ev);
      }}
    >
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-sm text-left bg-white rounded-lg shadow-md cursor-pointer shadow-gray-500 focus:outline-none">
          <span className="block truncate">
            {status
              ? items.find((item) => item.id === status)?.name
              : items.find((item) => item.id === defaultValue)?.name}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <GoChevronDown
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={item.id}
              >
                {({ selected }) => (
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default CustomSelect;

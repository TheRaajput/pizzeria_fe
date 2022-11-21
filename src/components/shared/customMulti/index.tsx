import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GoChevronDown } from "react-icons/go";

interface Props {
  items: { _id: string; name: string }[];
  selected: { _id: string; name: string }[];
  setSelected: (value: { _id: string; name: string }[]) => void;
  onChange: (key: string, val: any) => void;
  item_key: string;
}
const CustomMulti = ({
  items,
  selected,
  setSelected,
  item_key,
  onChange,
}: Props) => {
  return (
    <Listbox
      value={selected}
      onChange={(ev) => {
        onChange(item_key, ev);
      }}
      multiple
    >
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-sm text-left bg-white rounded-lg shadow-md cursor-pointer shadow-gray-500 focus:outline-none">
          {selected.length > 0 ? (
            <span className="block truncate">
              {selected.map((items, index) => (
                <p key={index}>{items.name}</p>
              ))}
            </span>
          ) : (
            <span>{item_key}</span>
          )}
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
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={item}
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

export default CustomMulti;

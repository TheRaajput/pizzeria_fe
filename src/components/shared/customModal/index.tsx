import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  title: string;
  buttonText: string;
  children: JSX.Element | JSX.Element[];
}
const CustomModal = ({ title, buttonText, children }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="p-2 mb-10 font-bold text-white bg-gray-800 rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        {buttonText}
      </button>
      {isOpen && (
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4">
                <Dialog.Panel className="w-3/4 px-10 py-5 mx-auto space-y-10 bg-white rounded-lg lg:w-1/3">
                  <Dialog.Title className="text-xl font-bold text-center">
                    {title}
                  </Dialog.Title>
                  <div>{children}</div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default CustomModal;

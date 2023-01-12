import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
type props = {
  children: React.ReactNode;
};
const index = ({ children }: props) => {
  return (
    <Transition className="fixed inset-0 z-50 lg:hidden">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="transition transform duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {children}
      </Transition.Child>
    </Transition>
  );
};

export default index;

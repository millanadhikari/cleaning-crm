import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function SelectOption({title, optionOne, optionTwo, optionThree}) {
  return (
    <div className="min-w-50 text-left ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex ring-0 justify-center w-full px-5 py-3 text-md font-medium text-gray-800 bg-gray-200 rounded-md  hover:bg-gray-300 focus:outline-none ">
           {title}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-gray-500 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-[9.5rem] mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-2 ">
              <Menu.Item>
                <button>{optionOne}</button>
              </Menu.Item>
            
            </div>
            <div className="px-2 py-2">
              <Menu.Item>
               <button>{optionTwo}</button>
              </Menu.Item>
              
            </div>
            <div className="px-2 py-2">
              <Menu.Item>
               <button>{optionThree}</button>
              </Menu.Item>
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


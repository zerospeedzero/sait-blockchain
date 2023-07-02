import { Disclosure } from "@headlessui/react";
import {BiChevronUp, BiChevronDown} from 'react-icons/bi'

const Dropdown = ({title, icon, content}) => {
  return (
    <Disclosure>
      {({open}) => (
        <>
          <Disclosure.Button>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                {icon}
                <span className="font-semibold">{title}</span>
              </div>
              {open ? (
                <BiChevronDown className="h-6 w-6 text-gray-400"/>
              ) :(
                <BiChevronUp className="h-6 w-6 text-gray-400"/>
              )}
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className="bg-gray-50 p-4 dark:bg-[#313339]">
              {content}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Dropdown
/*const Paras = () => {
  return (
    <div className="text-black">
      <p>Paras Frontend Intern Hiring Test</p>
      <p>Please modify the /src based on the test</p>
    </div>
  )
}

export default Paras*/



import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          
          <div className="flex justify-start lg:w-0 lg:flex-1 text-3xl font-black">
            <a href="#">
              <span className="sr-only">Your Company</span>
              Paras Shop
            </a>
          </div>
          
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Collection
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pages
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="#" className="mx-5 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
            </a>
            <a href="#" className="mx-5 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
            </a>
            <a href="#" className="mx-5 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
            </a>
          </div>

        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">

        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                
                <div className="text-3xl font-black">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    Paras Shop
                  </a>
                </div>

                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 py-6 px-5">
              <div className="grid gap-y-4 gap-x-8 items-center justify-center text-center">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Home
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Shop
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Collection
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Pages
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  About
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
              
              <div className="grid gap-y-4 gap-x-8 items-center justify-center text-center grid-cols-3">
              <a href="#" className="mx-5 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
            </a>
            <a href="#" className="mx-5 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
            </a>
            <a href="#" className="mx-5 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
            </a>
              </div>
            </div>

          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

import React, { Fragment } from "react";
import { Link} from "react-router-dom";

import logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

export default function Header() {

  return (
    <header className="border-b font-primary flex items-center justify-between max-w-full w-full lg:px-8 px-2 py-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap"
      >
        <img src={logo} alt="" className="lg:w-full w-[60%]" />
      </Link>
      <div className="flex items-center justify-center gap-x-1">
        <nav className="hidden xl:flex text-base uppercase">
          <ul className="flex justify-center items-center xl:gap-x-8 lg:gap-x-6 md:gap-x-4">
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200 relative">
                <Menu.Button className="flex items-center relative hover:text-gray-500 transition-all duration-200">
                  <a href="#" className="hidden xl:block uppercase">
                    PROJECTS
                  </a>
                  <BiChevronDown className="h-5 w-5 hidden" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 -left-2 z-10 mt-6 w-[170px] bg-white rounded-sm bg-primary shadow focus:outline-none h-[220px] uppercase">
                  <div className="py-1">
                    <Menu.Item as={Link} name="" to="/projects/residental">
                      <div className="hover:bg-gray-200/80 hover:text-[#333] cursor-pointer transition-all duration-200 text-left mt-0 pl-2 py-2 text-sm uppercase">
                        RESIDENTAL
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} name="" to="/projects/hospitality">
                      <div className="hover:bg-gray-200/80 hover:text-[#333] py-2 pl-2 cursor-pointer transition-all duration-200 text-left text-sm">
                        HOSPITALITY
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} name="" to="/projects/office">
                      <div className="hover:bg-gray-200/80 hover:text-[#333] py-2 pl-2 cursor-pointer transition-all duration-200 text-left text-sm">
                        OFFICE
                      </div>
                    </Menu.Item>
                    <Menu.Item
                      as={Link}
                      name=""
                      to="/projects/furnitureproduct"
                    >
                      <div className="hover:bg-gray-200/80 hover:text-[#333] py-2 pl-2 cursor-pointer transition-all duration-200 text-left text-sm">
                        FURNITURE & PRODUCT
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} name="" to="/projects/exteriorfacade">
                      <div className="hover:bg-gray-200/80 hover:text-[#333] py-2 pl-2 cursor-pointer transition-all duration-200 text-left text-sm">
                        EXTERIOR & FACADE
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} name="" to="/projects/ffe-services">
                      <div className="hover:bg-gray-200/80 hover:text-[#333] py-2 pl-2 cursor-pointer transition-all duration-200 text-left text-sm">
                        FF&E SERVICES
                      </div>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <li className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200 hover:text-gray-500">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200 hover:text-gray-500">
              <Link to="/blog">BLOG</Link>
            </li>

            <li className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey transition duration-200 hover:text-lightgray">
              <Link to="/contact" className="hidden xl:block ">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

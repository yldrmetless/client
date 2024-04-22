import React, { Fragment, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";


const menuVariants = {
  hidden: {
    y: "-150%",
    x: "150%"
  },
  show: {
    x: 0,
    y:0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="xl:hidden font-primary w-full px-6">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <RxHamburgerMenu />
      </div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-8 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-start px-16 gap-y-8 font-primary text-lg">
        
          <Menu as="div" className="relative inline-block text-center">
            <div className="flex items-center justify-center gap-x-2 text-grey hover:text-lightgrey text-center transition duration-200 relative">
              <Menu.Button className="flex items-center justify-center relative">
                PROJECTS
                <BiChevronDown className="h-5 w-5" aria-hidden="true" />
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
              <Menu.Items className="absolute right-24 left-0 z-10 mt-2 w-[200px] bg-white  rounded bg-primary shadow-md focus:outline-none h-[250px] border">
                <div>
                  <Menu.Item as={Link} name="" to="/projects/residental" onClick={() => setOpenMenu(false)}>
                    <div className="cursor-pointer transition-all duration-200 text-left text-base mt-0 py-2 pl-2 hover:bg-[#fdc500]">
                      RESIDENTAL
                    </div>
                  </Menu.Item>
                  <Menu.Item as={Link} name="" to="/projects/hospitality" onClick={() => setOpenMenu(false)}>
                    <div className="cursor-pointer transition-all duration-200 text-left text-base mt-0 py-2 pl-2 hover:bg-[#fdc500]">
                      HOSPITALITY
                    </div>
                  </Menu.Item>
                  <Menu.Item as={Link} name="" to="/projects/office" onClick={() => setOpenMenu(false)}>
                    <div className="cursor-pointer transition-all duration-200 text-left text-base mt-0 py-2 pl-2 hover:bg-[#fdc500]">
                      OFFICE
                    </div>
                  </Menu.Item>
                  <Menu.Item as={Link} name="" to="/projects/furnitureproduct" onClick={() => setOpenMenu(false)}>
                    <div className="cursor-pointer transition-all duration-200 text-left text-base mt-0 py-2 pl-2 hover:bg-[#fdc500]">
                      FURNITURE & PRODUCT
                    </div>
                  </Menu.Item>
                  <Menu.Item as={Link} name="" to="/projects/exteriorfacade" onClick={() => setOpenMenu(false)}>
                    <div className="cursor-pointer transition-all duration-200 text-left text-base mt-0 py-2 pl-2 hover:bg-[#fdc500]">
                      EXTERIOR & FACADE
                    </div>
                  </Menu.Item>
                  <Menu.Item as={Link} name="" to="/projects/ffe-services" onClick={() => setOpenMenu(false)}>
                    <div className="cursor-pointer transition-all duration-200 text-left text-base mt-0 py-2 pl-2 hover:bg-[#fdc500]">
                      FF&E SERVICES
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <li>
            <Link to={"/about"} onClick={() => setOpenMenu(false)}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/blog"} onClick={() => setOpenMenu(false)}>BLOG</Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setOpenMenu(false)}>CONTACT</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;

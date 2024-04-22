import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-2 border-gray-200">
      <div className="w-full max-w-full lg:px-28 px-8 mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 gap-x-24 xl:gap-x-0">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Projects" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/projects/residental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Residental
                </Footer.Link>
                <Footer.Link
                  href="/projects/hospitality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hospitality
                </Footer.Link>
                <Footer.Link
                  href="/projects/office"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Office
                </Footer.Link>
                <Footer.Link
                  href="/projects/furnitureproduct"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Furniture & Product
                </Footer.Link>
                <Footer.Link
                  href="/projects/exteriorfacade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Exterior Facade
                </Footer.Link>
                <Footer.Link
                  href="/projects/ffeservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FF&E Services
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/shamaconcept"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
                <Footer.Link href="https://tr.linkedin.com/in/aysesama" target="_blank">
                  Linkedin
                </Footer.Link>
                <Footer.Link href="https://www.behance.net/samaayse" target="_blank">
                  Behance
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="SHAMA Interior Design"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Link to={"https://www.instagram.com/shamaconcept/"} target="blank">
              <FaInstagram className="text-xl" />
            </Link>
            <Link to={"https://tr.linkedin.com/in/aysesama"} target="blank">
              <FaLinkedin className="text-xl" />
            </Link>
            <Link to={"https://www.behance.net/samaayse"} target="blank">
              <FaBehance className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}

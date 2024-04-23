import contact from "../assets/contact.png";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: -500,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function About() {
  return (
    <div className="max-w-full w-full">
      <div className="w-full lg:h-screen relative">
        <div className="relative">
          <img src={contact} alt="" />
          <div className="w-full h-full absolute top-0 left-0 bg-black/30"></div>
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-6xl font-sixth font-semibold">
          CONTACT
        </h1>
      </div>

      <div className="lg:mt-8 2xl:mt-60 mt-16 mb-16 lg:px-28 px-8 flex justify-center items-center gap-x-12 font-fifth">
        <motion.div
          initial="hidden"
          variants={fadeInUpAnimation}
          animate="show"
          className="lg:flex-1 lg:text-left text-center"
        >
          <h1 className="text-center lg:text-4xl text-2xl font-semibold">GET IN TOUCH</h1>

          <div className="w-full flex justify-center items-start gap-x-16 mt-16">
            <div>
              <h1 className="font-semibold text-xl">CONTACT US</h1>
              <a className="inline-block mt-4" href="mailto:info@aysesama.com">info@aysesama.com</a>
            </div>
            <div>
              <h1 className="font-semibold text-xl">FOLLOW US</h1>
              <div className="mt-4 flex items-center justify-center gap-x-4">
                <Link
                  to={"https://www.instagram.com/shamaconcept/"}
                  target="blank"
                >
                  <FaInstagram className="lg:text-3xl text-xl" />
                </Link>
                <Link to={"https://tr.linkedin.com/in/aysesama"} target="blank">
                  <FaLinkedin className="lg:text-3xl text-xl" />
                </Link>
                <Link to={"https://www.behance.net/samaayse"} target="blank">
                  <FaBehance className="lg:text-3xl text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import SocialMediaLinks from "./SocialMediaLinks";
import Typerwriter from "./Typewriter";
import HeroImage from "./HeroImage";
import SparklingText from "../SparklingText";

const data_social = [
  {
    id: 1,
    title: "Github",
    icon: AiFillGithub,
    link: "/github",
  },
  {
    id: 2,
    title: "Linkedin",
    icon: AiFillLinkedin,
    link: "/linkedin",
  },
  {
    id: 3,
    title: "Twitter",
    icon: AiFillTwitterCircle,
    link: "/twitter",
  },
  {
    id: 4,
    title: "Instagram",
    icon: AiFillInstagram,
    link: "/instagram",
  },
];

const Hero = () => {
  return (
    <section className="container flex items-center justify-center pt-16 md:h-screen">
      <div className="lg:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        <div className="col-span-2 flex flex-col items-center  justify-center space-y-4 lg:space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="font-[500] text-3xl lg:text-5xl "
          >
            Hello I&apos;m
          </motion.h2>

          {/* <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="font-[800] text-4xl lg:text-6xl leading-[35px] sm:leading-[46px]"
          >
            Malitha Sandaruwan
          </motion.h1> */}

          <SparklingText text={"Malitha Sandaruwan"} />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3 }}
          >
            <Typerwriter />
          </motion.div>

          <motion.div>
            <div className="flex flex-row gap-8 flex-wrap justify-center">
              {data_social.map((social, index) => {
                return (
                  <SocialMediaLinks
                    key={social.id}
                    link={social.link}
                    title={social.title}
                    icon={social.icon}
                    delay={index * 0.5}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center ">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// animation: profile__animate 8s ease-in-out infinite 1s;

// @keyframes profile__animate {
//   0% {
//     border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
//   }
//   50% {
//     border-radius: 30% 60% 70% 40% / 50% 60% 40% 70%;
//   }
//   100% {
//     border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
//   }

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="#about">
      <div className="container">
        <div>
          <h1 className="text-4xl pb-12 text-center font-[600]">
            &lt;About Me /&gt;
          </h1>

          <div className="lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-4 rounded-lg p-5  bg-[#222] mb-10 min-h-[18rem]">
            <div className="col-span-3">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-[500] text-3xl text-center lg:text-left"
              >
                {" "}
                &lt;h1&gt; Introduction &lt;/h1&gt;{" "}
              </motion.h2>
            </div>
            <div className="row-span-2 col-span-2 flex justify-center ">
              <Image
                src="/about-introduction_01.png"
                alt="about-introduction"
                height="150"
                width="200"
              />
            </div>

            <div className="col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <p className="text-sm lg:text-base   leading-7 text-justify px-6 dark:text-[#b3b3b3]">
                  I am a second-year undergraduate student at the University of
                  Moratuwa in Sri Lanka with a passion for web design and
                  coding. Creating user-friendly and visually appealing websites
                  is what I enjoy most. I am committed to excellence and am
                  always looking to improve my skills and gain more experience.
                  I am enthusiastic about innovative design and am excited to
                  continue developing my abilities in this field.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-2 rounded-lg p-5  bg-[#222] min-h-[18rem] mb-10">
            <div className="block sm:block md:block lg:hidden col-span-3">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-[500] text-3xl text-center lg:text-left"
              >
                {" "}
                &lt;h1&gt; My Education &lt;/h1&gt;{" "}
              </motion.h2>
            </div>
            <div className="row-span-2 col-span-2 flex justify-center items-center">
              <Image
                src="/about-edu.png"
                alt="about-edu"
                height="150"
                width="300"
              />
            </div>
            <div className="hidden sm:hidden md:hidden lg:block col-span-3">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-[500] text-3xl text-center lg:text-left"
              >
                {" "}
                &lt;h1&gt; My Education &lt;/h1&gt;{" "}
              </motion.h2>
            </div>

            <div className="col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <p className="text-sm lg:text-base  leading-7 text-justify px-6 dark:text-[#b3b3b3]">
                  I&apos;m currently pursuing my Bachelor of Science in
                  Information Technology at the University of Moratuwa, one of
                  the leading universities in Sri Lanka. I have a strong
                  academic record and have participated in various projects and
                  competitions related to IT. I have also completed several
                  online courses and certifications to enhance my knowledge and
                  portfolio.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-4 rounded-lg p-5  bg-[#222] mb-10 min-h-[18rem]">
            <div className="col-span-3">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-[500] text-3xl text-center lg:text-left"
              >
                {" "}
                &lt;h1&gt; My Experience &lt;/h1&gt;{" "}
              </motion.h2>
            </div>
            <div className="row-span-2 col-span-2 flex justify-center">
              <Image
                src="/about-experience.png"
                alt="about-experience"
                height="150"
                width="250"
              />
            </div>

            <div className="col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <p className="text-sm lg:text-base   leading-7 text-justify px-6 dark:text-[#b3b3b3] ">
                  I am a second-year undergraduate student at the University of
                  Moratuwa in Sri Lanka with a passion for web design and
                  coding. Creating user-friendly and visually appealing websites
                  is what I enjoy most. I am committed to excellence and am
                  always looking to improve my skills and gain more experience.
                  I am enthusiastic about innovative design and am excited to
                  continue developing my abilities in this field.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

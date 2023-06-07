"use client";
import Image from "next/image";
import React from "react";
import SkillSection from "./SkillSection";

const data = [
  {
    id: 1,
    title: "<h1> frontend </h1>",
    heading: "The Key to Make Websites Come to Life",
    description:
      "I have experience in using various frontend technologies to make websites that are dynamic, interactive and stunning. I can use Next.js to create fast and SEO-friendly websites",
    images: [],
  },
  {
    id: 2,
    title: "<h1> backend </h1>",
    heading: "Power Uping the Web Applications",
    description:
      "I have skills in using various backend technologies to support web applications that are robust, flexible and user-friendly. I can do routing, error handling, authentication and cloud functions.",
    images: [],
  },
  {
    id: 3,
    title: "<h1> database </h1>",
    heading: "The Key to Data-Driven Solutions and Insights",
    description:
      "I have skills in using various databases to store and manage data for different applications and purposes. I can create, query and manipulate data using various tools and languages.",
    images: [],
  },
];

const Skills = () => {
  return (
    <section id="#skills">
      <div className="container">
        <div>
          <h1 className="text-4xl pb-12 text-center font-[600]">
            &lt;My Skills /&gt;
          </h1>
        </div>
        <div>
          <Image
            // src="https://img.icons8.com/color/48/null/redis.png"
            src="/technologies/icons8-redis-48.svg"
            alt="git"
            width={64}
            height={64}
          />
        </div>

        <div className="lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 rounded-lg ">
          {data.map((skill) => {
            return (
              <SkillSection
                key={skill.id}
                title={skill.title}
                heading={skill.heading}
                desciption={skill.description}
                images={skill.images}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

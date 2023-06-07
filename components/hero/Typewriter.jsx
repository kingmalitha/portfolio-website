import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {
  const [text, count] = useTypewriter({
    words: ["Full Stack Developer", "Web Designer", "Freelancer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="text-2xl font-[400]">
      <h3>
        <span>{text}</span>
        <Cursor cursorColor="#ddd" />
      </h3>
    </div>
  );
};

export default Typewriter;

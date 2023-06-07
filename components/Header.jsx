/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  AiFillHome,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BiBook, BiPhoneCall } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isMobileViewOpened, setMobileViewOpened] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMobileMenu = () => {
    setMobileViewOpened(!isMobileViewOpened);
  };

  if (!isScrolled) return;

  return (
    <header header className="w-full min-h-[60px] z-50 fixed">
      <div className="max-w-[1400px] min-h-[60px] px-4 mx-auto pt-4 flex flex-row justify-between items-center shadow-lg shadow-black/5">
        <div>
          <h1>Logo</h1>
        </div>

        <div>
          <ul className="hidden md:flex md:gap-5 lg:gap-10 uppercase">
            <li>
              <a href="/" class="animatied_li">
                <span className="flex md:flex-col lg:flex-row items-center lg:gap-2 ">
                  <AiOutlineHome className="mb-[2px]" /> Home
                </span>
              </a>
            </li>
            <li>
              <a href="#about" class="animatied_li">
                <span className="flex md:flex-col lg:flex-row items-center lg:gap-2 ">
                  <AiOutlineUser className="mb-[2px]" /> About
                </span>
              </a>
            </li>
            <li>
              <a href="#skills" class="animatied_li">
                <span className="flex md:flex-col lg:flex-row items-center lg:gap-2 ">
                  <BiBook className="mb-[2px]" /> Skills
                </span>
              </a>
            </li>
            <li>
              <a href="#projects" class="animatied_li">
                <span className="flex md:flex-col lg:flex-row items-center lg:gap-2 ">
                  <AiOutlineFundProjectionScreen className="mb-[2px]" />{" "}
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a href="#blogs" class="animatied_li">
                <span className="flex md:flex-col lg:flex-row items-center lg:gap-2 ">
                  <CgFileDocument className="mb-[2px]" /> Blogs
                </span>
              </a>
            </li>
            <li>
              <a href="#contact" class="animatied_li">
                <span className="flex md:flex-col lg:flex-row items-center lg:gap-2 ">
                  <BiPhoneCall className="mb-[2px]" /> Contact
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="md:hidden z-50 w-10 h-10 flex justify-center items-center rounded-full transition hover:bg-gray-600 "
          onClick={handleMobileMenu}
        >
          {isMobileViewOpened ? (
            <ImCross size={20} className="cursor-pointer" />
          ) : (
            <FaBars size={20} className="cursor-pointer" />
          )}
        </div>

        {/* MOBILE MENU START */}
        <div
          onClick={handleMobileMenu}
          className={
            isMobileViewOpened
              ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 left-0 w-full h-screen bg-[#222] px-4 py-7 flex flex-col`
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12 flex flex-col items-center gap-2 ">
            <li className="text-2xl py-4 hover:text-[#06b6d4] w-full rounded-lg flex flex-row justify-center">
              <a href="/">
                <span className="flex items-center gap-2">
                  <AiOutlineHome className="mb-[2px]" /> Home
                </span>
              </a>
            </li>
            <li className="text-2xl py-4 hover:text-[#06b6d4] w-full rounded-lg flex flex-row justify-center">
              <a href="#about">
                <span className="flex items-center gap-2 ">
                  <AiOutlineUser className="mb-[2px]" /> About
                </span>
              </a>
            </li>
            <li className="text-2xl py-4 hover:text-[#06b6d4] w-full rounded-lg flex flex-row justify-center">
              <a href="#skills">
                <span className="flex items-center gap-2">
                  <BiBook className="mb-[2px]" /> Skills
                </span>
              </a>
            </li>
            <li className="text-2xl py-4 hover:text-[#06b6d4] w-full rounded-lg flex flex-row justify-center">
              <a href="#projects">
                <span className="flex items-center gap-2">
                  <AiOutlineFundProjectionScreen className="mb-[2px]" />{" "}
                  Projects
                </span>
              </a>
            </li>
            <li className="text-2xl py-4 hover:text-[#06b6d4] w-full rounded-lg flex flex-row justify-center">
              <a href="#blogs">
                <span className="flex items-center gap-2">
                  <CgFileDocument className="mb-[2px]" /> Blogs
                </span>
              </a>
            </li>
            <li className="text-2xl py-4 hover:text-[#06b6d4] w-full rounded-lg flex flex-row justify-center">
              <a href="#contact">
                <span className="flex items-center gap-2">
                  <BiPhoneCall className="mb-[2px]" /> Contact
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU END*/}
      </div>
    </header>
  );
};

export default Header;

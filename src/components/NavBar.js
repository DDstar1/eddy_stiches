"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const highlightContact = () => {
  const contactElement = document.getElementById("real_contact");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      contactElement.classList.add("blinking-border");

      setTimeout(() => {
        contactElement.classList.remove("blinking-border");
      }, 4000);
    }, 1000);
  }
};

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (clickCount === 2) {
        router.push("/admin");
        setClickCount(0); // Reset click count after redirect
      } else if (clickCount > 0) {
        const timer = setTimeout(() => setClickCount(0), 500);
        return () => clearTimeout(timer); // Reset click count if time exceeds 500ms
      }
    }
  }, [clickCount, router]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="z-20 relative mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-center font-bold"
      >
        <Link href="/">Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  text-center font-bold"
      >
        <Link href="/about_us">About Us</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-center font-bold"
      >
        <Link href="/gallery">Gallery</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-center font-bold"
      >
        <button onClick={highlightContact}>Contact Us</button>
      </Typography>
    </ul>
  );

  const handleLogoClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <Navbar className=" sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 text-black">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 flex relative left-3 items-center gap-5"
          onClick={handleLogoClick}
        >
          <div className="z-20 font-bold relative ">Eddy Stitches </div>
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            className="dark:invert "
            width={50}
            height={50}
            objectFit="contain"
            priority
          />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}

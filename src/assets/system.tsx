import HeroImage from './images/Hero.jpg'
export const NavLinks = [
    {
        link: 'Home',
        rots: 'home'
    }, {
        link: 'About',
        rots: 'about'
    }, {
        link: 'Skills',
        rots: 'skills'
    }, {
        link: 'Projects',
        rots: 'projects'
    }, {
        link: 'Contact Us',
        rots: 'contact'
    }
]

export const Person = HeroImage

/* 
import React from "react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-center gap-8 z-50">
      <button onClick={() => scrollToSection("home")} className="hover:text-blue-500">Home</button>
      <button onClick={() => scrollToSection("about")} className="hover:text-blue-500">About</button>
      <button onClick={() => scrollToSection("projects")} className="hover:text-blue-500">Projects</button>
      <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500">Contact</button>
    </nav>
  );
};

export default Navbar;
=======================
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Ahmed 👋</h1>
      <p className="text-xl">Frontend Developer | React & TypeScript</p>
    </section>
  );
};

export default Hero;

 */
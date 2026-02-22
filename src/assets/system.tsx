import HeroImage from './images/Hero.jpg'
import React_Project_1 from './images/react_project_1.png'
import React_Project_2 from './images/react_project_2.webp'
import React_Project_3 from './images/react_project_3.png'
import React_Project_4 from './images/react_project_4.png'
import React_Project_5 from './images/quick_cart.png'
import graduation from './images/G.png'
import Burger from './images/Burger.png'
import Portifolio_2 from './images/portifolio_2.png'

import Bien from './images/bien.png'
import Res from './images/res.png'
import Por from './images/por.png'
import E_commerce from './images/e-commerce.png'

import {
    FileCode,
    Palette,
    Code2,
    Boxes,
    Layers,
    Atom,
    Database,
    GitBranch,
    GitCommit,
    Github,
    Cloud,
    CircuitBoard,
    Cpu,
    Rocket,
    ScrollText,
    Server,
} from "lucide-react";

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

export const Skills = [
    // --- Programming Languages ---
    { name: "C", icon: <Cpu className="text-blue-600 mx-auto" /> },
    { name: "C++", icon: <CircuitBoard className="text-sky-700 mx-auto" /> },
    { name: "Dart", icon: <Rocket className="text-sky-500 mx-auto" /> },

    // --- Frontend ---
    { name: "HTML", icon: <FileCode className="text-orange-500 mx-auto" /> },
    { name: "CSS", icon: <Palette className="text-blue-500 mx-auto" /> },
    { name: "JavaScript", icon: <Code2 className="text-yellow-400 mx-auto" /> },
    { name: "TypeScript", icon: <ScrollText className="text-sky-500 mx-auto" /> },
    { name: "Bootstrap", icon: <Boxes className="text-purple-500 mx-auto" /> },
    { name: "Tailwind CSS", icon: <Layers className="text-cyan-400 mx-auto" /> },
    { name: "React.js", icon: <Atom className="text-cyan-400 mx-auto" /> },
    { name: "Redux Toolkit", icon: <Database className="text-indigo-500 mx-auto" /> },


    // --- Tools & Platforms ---
    { name: "Git", icon: <GitCommit className="text-red-500 mx-auto" /> },
    { name: "GitHub", icon: <Github className="text-gray- mx-auto" /> },
    { name: "Vercel", icon: <Cloud className="text-gray- mx-auto" /> },
    { name: "PHP", icon: <Server className="text-indigo-600 mx-auto" /> },
];

export const Projects = [
    // 🔝 مشاريع قوية (React + Tailwind + API + Material/Redux)
    {
        title: "DashBoard Website",
        image: React_Project_4,
        tech: ["React.js", "TailwindCSS", "Redux Toolkit", "Material UI", "Api"],
        demo: "http://g-store-dashboard.vercel.app/",
        github: "/Dashboard",
    },
    {
        title: "Quick Cart",
        image: React_Project_5,
        tech: ["React.js", "TypeScript", "TailwindCSS", "Headless ui"],
        demo: "https://quick-cart-flame-mu.vercel.app/",
        github: "/QuickCart",
    },
    {
        title: "e-commerce",
        image: React_Project_3,
        tech: ["React.js", "TailwindCSS", "Api", "AOS", "Material UI"],
        demo: "https://ahmed2020026.github.io/e-commerce/",
        github: "/e-commerce",
    },
    {
        title: "Estate Website",
        image: React_Project_2,
        tech: ["React.js", "TailwindCSS", "AOS", "Material UI"],
        demo: "https://ahmed2020026.github.io/Estate_project/",
        github: "/Estate_project",
    },
    // 🔹 مشروع Freelance (React + Tailwind + Material UI)
    {
        title: "Burger Website",
        image: Burger,
        tech: ["React.js", "tailwindCSS", "Material UI", "AOS"],
        demo: "https://store-temi.vercel.app/",
        github: "/Burger",
    },
    {
        title: "RentUP Website",
        image: React_Project_1,
        tech: ["React.js"],
        demo: "https://ahmed2020026.github.io/FirstProject/",
        github: "/FirstProject",
    },
    {
        title: "Portfolio Version 2",
        image: Portifolio_2,
        tech: ["React.js", "TailwindCSS", "AOS"],
        demo: "https://ahmed2020026.github.io/Portifolio_v2/",
        github: "/Portifolio_v2",
    },
    {
        title: "Portfolio Version 1",
        image: Por,
        tech: ["HTML", "CSS", "JavaScript"],
        demo: "https://ahmed2020026.github.io/portifolio/",
        github: "/portifolio",
    },
    // 🟢 مشاريع متوسطة (HTML/CSS/JS مع Tailwind أو Bootstrap)
    {
        title: "Graduation Project",
        image: graduation,
        tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
        demo: "https://embedskill.tryasp.net/",
        github: "/ProjectGraduation",
    },
    {
        title: "e-commerce",
        image: E_commerce,
        tech: ["HTML", "CSS", "JavaScript"],
        demo: "https://ahmed2020026.github.io/raya_site/",
        github: "/raya_site",
    },
    {
        title: "Bein Sport",
        image: Bien,
        tech: ["HTML", "CSS", "JavaScript", "BootStrap"],
        demo: "https://ahmed2020026.github.io/Bein_Sport/",
        github: "/Bein_Sport",
    },
    {
        title: "Resturant",
        image: Res,
        tech: ["HTML", "CSS", "JavaScript", "BootStrap"],
        demo: "https://ahmed2020026.github.io/resturant/",
        github: "/resturant",
    },
];
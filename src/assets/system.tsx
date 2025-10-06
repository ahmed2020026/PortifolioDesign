import HeroImage from './images/Hero.jpg'
import React_Project_1 from './images/react_project_1.png'
import React_Project_2 from './images/react_project_2.webp'
import React_Project_3 from './images/react_project_3.png'
import React_Project_4 from './images/react_project_4.png'

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
    { name: "React", icon: <Atom className="text-cyan-400 mx-auto" /> },
    { name: "Redux Toolkit", icon: <Database className="text-indigo-500 mx-auto" /> },
    { name: "jQuery", icon: <GitBranch className="text-blue- mx-auto" /> },


    // --- Tools & Platforms ---
    { name: "Git", icon: <GitCommit className="text-red-500 mx-auto" /> },
    { name: "GitHub", icon: <Github className="text-gray-700 dark:text-gray-100 mx-auto" /> },
    { name: "Vercel", icon: <Cloud className="text-gray-800 dark:text-gray-200 mx-auto" /> },
];

export const Projects = [
    {
        title: "React Project",
        image: React_Project_1,
        tech: ["React"],
        demo: "https://ahmed2020026.github.io/FirstProject/",
        github: "/FirstProject",
    },
    {
        title: "Estate Website",
        image: React_Project_2,
        tech: ["React", "TailwindCSS", "AOS" , "Material UI"],
        demo: "https://ahmed2020026.github.io/Estate_project/",
        github: "/Estate_project",
    },
    {
        title: "e-commerce",
        image: React_Project_3,
        tech: ["React", "TailwindCSS", "Api" , "AOS" , "Material UI"],
        demo: "https://ahmed2020026.github.io/e-commerce/",
        github: "/e-commerce",
    },
    {
        title: "DashBoard Website",
        image: React_Project_4,
        tech: ["React", "TailwindCSS", "Redux Toolkit" , "Material UI" , "Api"],
        demo: "http://g-store-dashboard.vercel.app/",
        github: "/Dashboard",
    },
    {
        title: "Portfolio Website",
        image: Por,
        tech: ["HTML", "CSS", "JavaScript"],
        demo: "https://ahmed2020026.github.io/portifolio/",
        github: "/portifolio",
    },
    {
        title: "e-commerce",
        image: E_commerce,
        tech: ["HTML", "CSS" , "JavaScript"],
        demo: "https://ahmed2020026.github.io/raya_site/",
        github: "/raya_site",
    },
    {
        title: "Bein Sport",
        image: Bien,
        tech: ["HTML" , "CSS" , "JavaScript" , "BootStrap"],
        demo: "https://ahmed2020026.github.io/Bein_Sport/",
        github: "/Bein_Sport",
    },
    {
        title: "Resturant",
        image: Res,
        tech: ["HTML" , "CSS" , "JavaScript" , "BootStrap"],
        demo: "https://ahmed2020026.github.io/resturant/",
        github: "/resturant",
    },
]
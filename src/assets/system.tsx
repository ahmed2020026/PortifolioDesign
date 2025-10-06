import HeroImage from './images/Hero.jpg'
import React_Project_1 from './images/react_project_1.png'
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
        title: "Portfolio Website",
        image: React_Project_1,
        tech: ["React", "Tailwind CSS", "TypeScript"],
        github: '',
        demo: "",
    },
    {
        title: "Todo App",
        image: React_Project_1,
        tech: ["React", "Redux Toolkit", "CSS"],
        github: "",
        demo: "",
    },
    {
        title: "Todo App",
        image: React_Project_1,
        tech: ["React", "Redux Toolkit", "CSS"],
        github: "",
        demo: "",
    },
    {
        title: "Weather App",
        image: React_Project_1,
        tech: ["React", "API", "Bootstrap"],
        github: "",
        demo: "",
    },
]
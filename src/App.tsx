import { About } from "./sections/About"
import { HeroSection } from "./sections/HeroSection"
import { Navbar } from "./sections/NavBar"
import { ProjectSection } from "./sections/Projects"
import { SkillsSection } from "./sections/ٍSkills"
import { ContactSection } from './sections/Contact'
import { Footer } from "./sections/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export const App = () => {
    const [themes, setThemes] = useState<string>('light');
    useEffect(() => {
        document.body.className = themes;
    }, [themes]);

    useEffect(() => {
        AOS.init({
            duration: 1000, // سرعة الانيميشن
            once: true,     // يظهر مرة واحدة فقط
        });
    }, []);
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 p-2 dark:text-white dark:bg-gray-900 bg-gray-50 text-gray-900`}>
                <Navbar setThemes={() => setThemes((prev: string) => prev === 'light' ? 'dark' : 'light')} />
            </header>

            <main className="relative">
                <HeroSection />
                <About />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
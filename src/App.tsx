import { getThemes } from "./context/Mode"
import { About } from "./sections/About"
import { HeroSection } from "./sections/HeroSection"
import { Navbar } from "./sections/NavBar"
import { ProjectSection } from "./sections/Projects"
import { SkillsSection } from "./sections/ٍSkills"
import { ContactSection } from './sections/Contact'
import { Footer } from "./sections/Footer"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const App = () => {
    const {order} = getThemes()!
    useEffect(() => {
        AOS.init({
            duration: 800,     // زمن الحركة
            once: true,        // 👈 دي أهم حاجة: تشغل الحركة مرة واحدة فقط
            offset: 100,       // امتى تبدأ الحركة (من تحت الشاشة)
            easing: "ease-out" // الحركة تبقى ناعمة
        });
    }, []);
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-20 p-2 blur-defficult ${order
                    ? 'text-white bg-gray-900'
                    : 'text-gray-900 bg-white'
                    } `}>
                <Navbar />
            </header>

            <main>
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
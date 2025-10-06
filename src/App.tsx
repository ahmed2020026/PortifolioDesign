import { getThemes, Themes } from "./context/Mode"
import { About } from "./sections/About"
import { HeroSection } from "./sections/HeroSection"
import { Navbar } from "./sections/NavBar"
import { ProjectSection } from "./sections/Projects"
import { SkillsSection } from "./sections/ٍSkills"
import { ContactSection } from './sections/Contact'
import { Footer } from "./sections/Footer"
export const App = () => {
    const {order} = getThemes()!
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
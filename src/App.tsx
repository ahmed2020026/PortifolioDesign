import { getThemes, Themes } from "./context/Mode"
import { About } from "./sections/About"
import { HeroSection } from "./sections/HeroSection"
import { Navbar } from "./sections/NavBar"
import { ProjectSection } from "./sections/Projects"
import { SkillsSection } from "./sections/ٍSkills"

export const App = () => {
    const order = getThemes()
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-20 p-2 blur-defficult ${order?.order
                    ? 'text-white'
                    : 'text-gray-900'
                    } `}>
                <Navbar />
            </header>

            <main>
                <HeroSection />
                <About />
                <SkillsSection />
                <ProjectSection />
            </main>
        </>
    )
}
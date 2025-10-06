import { getThemes, Themes } from "./context/Mode"
import { About } from "./sections/About"
import { HeroSection } from "./sections/HeroSection"
import { Navbar } from "./sections/NavBar"

export const App = () => {
    const order = getThemes()
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-20 p-2 blur-defficult ${order?.order
                        ? 'bg-gray-900/40 text-white'
                        : 'bg-white/60 text-gray-900'
                    } `}>
                <Navbar />
            </header>

            <main>
                <HeroSection />
                <About />
            </main>
        </>
    )
}
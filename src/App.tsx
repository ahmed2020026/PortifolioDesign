import { Themes } from "./context/Mode"
import { HeroSection } from "./sections/HeroSection"
import { Navbar } from "./sections/NavBar"

export const App = () => {
    return (
        <>
            <Themes>
                <header className="p-2 z-10 fixed w-full">
                    <Navbar />
                </header>
                <main>
                    <HeroSection />
                </main>
            </Themes>
        </>
    )
}
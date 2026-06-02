import { Person } from "@/assets/system";
import { Button } from "@/components/ui/button";
import { ScrollTo } from "@/hooks/useScroll";
import { ReactTyped } from "react-typed";

export const HeroSection = () => {
    
    return (
        <>
            <section
                id="home"
                className={`section py-20 flex justify-center items-center dark:bg-gray-900 bg-gray-50`}
            >
                <div
                    className="container overflow-hidden mx-auto grid md:grid-cols-2 gap-10 items-center"
                    style={{ padding: "0 20px" }}
                >
                    {/* النصوص */}
                    <div
                        data-aos="fade-up"
                        className="text-center md:text-left order-2 md:order-1"
                    >
                        <p className={`text-blue-600`}>Hello! I'm</p>
                        <h2
                            data-aos="fade-right"
                            className={`text-2xl md:text-4xl font-[500] mb-5 dark:text-white text-black`}
                        >
                            <ReactTyped
                                strings={["Ahmed Samir", "Frontend Developer", "React Developer", "JavaScript Developer"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </h2>
                        <div data-aos="fade-left">
                            <p className={`text-base max-w-xl mb-8  dark:text-white/50 text-black/70`}>
                                I build modern, responsive, and high-performance web applications
                                with React, TypeScript, and TailwindCSS.
                            </p>
                        </div>

                        <div data-aos="fade-up" className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <Button
                                type="button"
                                size="default"
                                className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                                onClick={() => ScrollTo('projects')}
                            >
                                View My Work
                            </Button>
                            <Button
                                type="button"
                                size="default"
                                variant="outline"
                                className="text-blue-600 border-blue-600 hover:text-blue-700 dark:hover:text-white cursor-pointer"
                                onClick={() => ScrollTo('contact')}
                            >
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    {/* الصورة */}
                    <div
                        data-aos="zoom-in"
                        className="flex justify-center md:justify-end order-1 md:order-2"
                    >
                        <img
                            src={Person}
                            alt="Ahmed profile"
                            className="rounded-full w-70 h-70 md:w-90 md:h-90 object-cover object-[50%_10%] bg-white p-2 shadow border border-gray-100"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

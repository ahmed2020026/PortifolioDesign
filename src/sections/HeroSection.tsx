import { Person } from "@/assets/system";
import { Button } from "@/components/ui/button";
import { getThemes } from "@/context/Mode";
import { ScrollTo } from "@/hooks/useScroll";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from 'aos';

export const HeroSection = () => {
    const { order } = getThemes()!;
    useEffect(() => {
        AOS.refresh();
    }, [order]);
    return (
        <>
            <section
                id="home"
                className={`flex justify-center items-center ${order ? "bg-gray-900" : 'bg-gray-50'}`}
            >
                <div
                    className="container mx-auto grid md:grid-cols-2 gap-10 items-center"
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
                            className={`text-2xl md:text-4xl font-[500] mb-5 ${order ? 'text-white' : 'text-black'}`}
                        >
                            <ReactTyped
                                strings={["Ahmed Samir", "Frontend Developer", "React Developer", "JavaScript Developer"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </h2>
                        <div data-aos="fade-left">
                            <p className={`text-base duration-150 max-w-xl mb-8  ${order ? 'text-white/50' : 'text-black/70'}`}>
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
                                className="text-blue-600 border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white cursor-pointer"
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
                            className="rounded-full w-70 h-70 md:w-90 md:h-90 object-cover object-[50%_10%] border-4"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

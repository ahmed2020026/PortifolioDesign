import { Person } from "@/assets/system";
import { Button } from "@/components/ui/button";
import { getThemes } from "@/context/Mode";
import { ScrollTo } from "@/hooks/useScroll";
import { ReactTyped } from 'react-typed';
import { motion } from "framer-motion";

export const HeroSection = () => {
    const { order } = getThemes()!;

    return (
        <section id="home" className={`flex justify-center items-center ${order ? "bg-gray-900" : 'bg-gray-50'}`}>
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-5">

                {/* النصوص */}
                <motion.div
                    className="text-center md:text-left order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="text-blue-600">Hello! I'm</p>
                    <h2 className={`text-2xl md:text-4xl font-[500] mb-5 ${order ? 'text-white' : 'text-black'}`}>
                        <ReactTyped
                            strings={["Ahmed Samir", "Frontend Developer", "React Developer", "JavaScript Developer"]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </h2>
                    <p className={`text-md md:text-lg max-w-xl mb-8 opacity-70 ${order ? 'text-white' : ''}`}>
                        I build modern, responsive, and high-performance web applications
                        with React, TypeScript, and TailwindCSS.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <Button
                            type="button"
                            size="lg"
                            className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                            onClick={() => ScrollTo('projects')}
                        >
                            View My Work
                        </Button>
                        <Button
                            type="button"
                            size="lg"
                            variant="outline"
                            className="text-blue-600 border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white cursor-pointer"
                            onClick={() => ScrollTo('contact')}
                        >
                            Contact Me
                        </Button>
                    </div>
                </motion.div>

                {/* الصورة */}
                <motion.div
                    className="flex justify-center md:justify-end order-1 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <img
                        src={Person}
                        alt="Ahmed profile"
                        className="rounded-full w-70 h-70 md:w-90 md:h-90 object-cover object-[50%_10%] border-4"
                    />
                </motion.div>
            </div>
        </section>
    );
}

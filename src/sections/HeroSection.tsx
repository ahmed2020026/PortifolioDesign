import { Person } from "@/assets/system";
import { Button } from "@/components/ui/button";
import { getThemes } from "@/context/Mode";
import { ReactTyped } from "react-typed";

export const HeroSection = () => {
    const {order} = getThemes()!;
    return (
        <>
            <section className={`flex justify-center items-center ${order ? "bg-gray-900" : 'bg-gray-50' } `}>
                <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center" style={{padding:"0 20px"}}>

                    {/* النصوص */}
                    <div className="text-center md:text-left">
                        <p className={`text-blue-500`}>Hello! I'm</p>
                        <h1 className={`text-2xl md:text-4xl font-[500] mb-10 ${order? 'text-white': 'text-black'}`}>
                            <ReactTyped
                                strings={["Ahmed Samir", "Frontend Developer", "React Developer" , "JavaScript Developer"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </h1>

                        <p className={`text-md md:text-lg max-w-xl mb-8 opacity-70 ${order ? 'text-white': ''}`}>
                            I build modern, responsive, and high-performance web applications
                            with React, TypeScript, and TailwindCSS.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <Button size="lg" className="bg-blue-500 text-white cursor-pointer hover:bg-blue-700">
                                View My Work
                            </Button>
                            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white cursor-pointer">
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    {/* الصورة */}
                    <div className="flex justify-center md:justify-end">
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

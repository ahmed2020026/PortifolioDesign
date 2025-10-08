import { Button } from "@/components/ui/button"
import { Title } from "@/components/ui/Title"
import { getThemes } from "@/context/Mode"

export const About = () => {
    const { order } = getThemes()!
    return (
        <section id="about" className={`flex justify-center items-center py-20 px-4 ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`} >
            <div className="container text-center max-w-3xl">

                <div data-aos="fade-down">
                    <Title title='About Me' />
                </div>

                <div data-aos="fade-up">
                    <div className={`text-base leading-relaxed tracking-wide duration-150 ${order ? "text-gray-300/80" : "text-gray-700/80"}`}>
                        <p className="mb-4 ">
                            Hi! I’m Ahmed Samir, a passionate Front-End Developer who loves creating
                            modern, responsive, and user-friendly web interfaces.
                        </p>

                        <p className="mb-4">
                            I focus on writing clean code, ensuring high performance, and following
                            best practices to deliver a perfect UI experience.
                        </p>

                        <p className="mb-4">
                            With solid experience in technologies like HTML, CSS, JavaScript, Bootstrap,
                            Tailwind CSS, React, jQuery, and Redux Toolkit, I turn ideas into elegant,
                            functional, and accessible web applications.
                        </p>

                        <p>
                            I’m always looking to learn new tools, enhance my skills, and build impactful
                            digital experiences that make a difference.
                        </p>
                    </div>
                </div>


                {/* الأزرار */}
                <div data-aos="fade-up" data-aos-delay="200" className="flex justify-center items-center gap-1.5 mt-10">
                    <Button
                        size="default"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://raw.githubusercontent.com/ahmed2020026/MY_CV/main/Ahmed_Samir_FrontEnd_CV.pdf";
                            link.download = "Ahmed_Samir_FrontEnd_CV.pdf";
                            link.click();
                        }}
                        aria-label="Download Ahmed Samir CV in PDF format"
                        className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                    >
                        Download CV
                    </Button>
                    <Button
                        size="default"
                        onClick={() =>
                            window.open(
                                "https://github.com/ahmed2020026/MY_CV/blob/main/Ahmed_Samir_FrontEnd_CV.pdf",
                                "_blank"
                            )
                        }
                        aria-label="View Ahmed Samir CV in PDF format"
                        className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                    >
                        View CV
                    </Button>
                </div>
            </div>
        </section>
    )
}
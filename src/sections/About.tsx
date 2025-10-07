import { Button } from "@/components/ui/button";
import { getThemes } from "@/context/Mode";

export const About = () => {
    const { order } = getThemes()!;

    return (
        <section
            id="about"
            className={`flex justify-center items-center py-20 px-4 ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}
        >
            <div className="container text-center max-w-3xl">
                {/* العنوان */}
                <h2
                    className={`text-2xl md:text-4xl font-semibold mb-8 ${order ? "text-white" : "text-gray-900"}`}
                >
                    About Me
                </h2>

                {/* الفقرات */}
                <div className={`text-base md:text-lg leading-relaxed tracking-wide opacity-80 ${order ? "text-gray-300" : "text-gray-700"}`}>
                    <p className="mb-4">
                        Hi! I’m <span className="font-semibold">Ahmed Samir</span>, a passionate{" "}
                        <span className="text-blue-700 font-medium">Front-End Developer</span> who loves creating
                        modern, responsive, and user-friendly web interfaces.
                    </p>

                    <p className="mb-4">
                        I focus on writing <span className="font-medium">clean code</span>, ensuring{" "}
                        <span className="text-blue-700 font-medium">high performance</span>, and following{" "}
                        <span className="font-medium">best practices</span> to deliver a perfect UI experience.
                    </p>

                    <p className="mb-4">
                        With solid experience in technologies like{" "}
                        <span className="font-semibold">
                            HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, jQuery, and Redux Toolkit
                        </span>
                        , I turn ideas into elegant, functional, and accessible web applications.
                    </p>

                    <p>
                        I’m always looking to learn new tools, enhance my skills, and build impactful digital
                        experiences that make a difference.
                    </p>
                </div>

                {/* الأزرار */}
                <div className="flex justify-center items-center gap-1.5 mt-10">
                    <Button
                        size="lg"
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
                        size="lg"
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
    );
}

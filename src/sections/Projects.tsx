import { Projects } from "@/assets/system";
import { getThemes } from "@/context/Mode";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectSection = () => {
    const { order } = getThemes()!;

    return (
        <section
            id="projects"
            className={`flex justify-center items-center py-20 px-4 ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}
        >
            <div className="container">
                {/* العنوان */}
                <motion.h2
                    className={`text-2xl mb-12 md:text-4xl font-semibold text-center ${order ? "text-white" : "text-gray-900"}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    My Works
                </motion.h2>

                {/* مشاريع */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Projects.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`shadow-md rounded-md relative overflow-hidden border ${order ? 'border-gray-800' : 'border-white'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <img src={item.image} alt={item.title} className="w-full h-48" />
                            <div className="p-5 flex flex-col justify-start h-[200px]">
                                <div>
                                    <h3 className="text-xl text-start font-semibold mb-2">{item.title}</h3>
                                    <div className="flex flex-wrap justify-start gap-2 mb-4">
                                        {item.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3 py-1 text-xs rounded-full ${order ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-800"}`}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-auto justify-between">
                                    <a
                                        href={item.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-500"
                                    >
                                        <ExternalLink size={18} aria-hidden='true' /> Live Demo
                                    </a>
                                    <a
                                        href={`https://github.com/ahmed2020026${item.github}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-1 px-2 py-1 border rounded-lg ${order ? 'text-gray-600 border-gray-600' : 'text-gray-500 border-gray-500'}`}
                                    >
                                        <Github size={18} aria-hidden='true' /> github
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

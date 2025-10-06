import { Projects } from "@/assets/system";
import { getThemes } from "@/context/Mode"
import { ExternalLink, Github } from "lucide-react";


export const ProjectSection = () => {
    const { order } = getThemes()!
    return (
        <section id='projects' className={`flex justify-center items-center py-20 px-4 ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
            <div className="container">
                <h2 className={`text-2xl mb-12 md:text-4xl font-semibold text-center ${order ? "text-white" : "text-gray-900"}`}>
                    My Works
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {Projects.map((item, index) => (
                        <div key={index} className={`shadow-md rounded-md relative overflow-hidden border ${order ? 'border-gray-800' : 'border-white'}`}>
                            <img src={item.image} alt={item.title} className="w-full h-48" />
                            <div className="p-5 flex flex-col justify-start h-[200px] ">
                                <div>
                                    <h3 className={`text-xl text-start font-semibold mb-2`}>
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap justify-start gap-2 mb-4">
                                        {item.tech.map((t, index) => (
                                            <span key={index} className={`px-3 py-1 text-xs rounded-full ${order ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-800"}`}>{t} </span>))}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-auto justify-between">
                                    <a href={item.demo} target="_blank" className="flex items-center gap-1 text-blue-500">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a href={`https://github.com/ahmed2020026${item.github}`} target="_blank" className={`flex items-center gap-1 px-2 py-1 border rounded-lg ${order? 'text-gray-600 border-gray-600': 'text-gray-500 border-gray-500'}`}>
                                        <Github size={18} /> github
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
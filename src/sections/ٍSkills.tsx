import { Skills } from "@/assets/system"
import { getThemes } from "@/context/Mode"

export const SkillsSection = () => {
    const { order } = getThemes()!
    return (
        <section
            id="skills"
            className={`py-20 px-6 ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
                }`}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-12">My Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                    {Skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ${order ? "bg-gray-900 hover:bg-gray-800" : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            <div className="text-4xl mb-3">{skill.icon}</div>
                            <h3 className="font-medium text-lg">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}


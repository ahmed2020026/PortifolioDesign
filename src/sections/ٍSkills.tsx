import { Skills } from "@/assets/system";
import { getThemes } from "@/context/Mode";
import React from "react";
import { motion } from "framer-motion";

export const SkillsSection = () => {
    const { order } = getThemes()!;

    return (
        <section
            id="skills"
            className={`py-20 px-6 ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}
        >
            <div className="container mx-auto text-center">
                {/* العنوان */}
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    My Skills
                </motion.h2>

                {/* المهارات */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                    {Skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 rounded-xl shadow-md hover:shadow-lg border border-white/20 transform hover:-translate-y-1 ${order ? "bg-gray-900 hover:bg-gray-800" : "bg-white hover:bg-gray-100"}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="text-4xl mb-3">
                                {React.cloneElement(skill.icon, { 'aria-hidden': true })}
                            </div>
                            <h3 className="font-medium text-lg">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

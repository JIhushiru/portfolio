type Props = {
    isDarkMode: boolean;
    skills: Record<string, string[]>;
}

const skillColors: Record<string, { dark: string; light: string }> = {
    languages: { dark: 'bg-blue-900/40 text-blue-300 border-blue-800', light: 'bg-blue-50 text-blue-700 border-blue-200' },
    'ml / ai': { dark: 'bg-emerald-900/40 text-emerald-300 border-emerald-800', light: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    frameworks: { dark: 'bg-violet-900/40 text-violet-300 border-violet-800', light: 'bg-violet-50 text-violet-700 border-violet-200' },
    backend: { dark: 'bg-amber-900/40 text-amber-300 border-amber-800', light: 'bg-amber-50 text-amber-700 border-amber-200' },
    tools: { dark: 'bg-gray-700 text-gray-300 border-gray-600', light: 'bg-gray-100 text-gray-600 border-gray-200' },
};

export default function About({ isDarkMode, skills}: Props) {
    return(
        <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800':'bg-white'}`}>
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                            About Me
                        </h2>
                        <div className={`w-12 h-1 rounded-full mb-8 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                            ML/AI Engineer with hands-on experience building end-to-end machine learning pipelines,
                            computer vision systems, and full-stack applications. Proficient in Python, PyTorch, TensorFlow,
                            and modern frameworks like React and FastAPI. Passionate about solving real-world problems
                            through data-driven solutions and scalable engineering.
                        </p>
                        <div className={`border-l-2 pl-4 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-500'}`}>
                            <p className="leading-relaxed italic">
                                When I'm not coding, you'll find me playing online games like Valorant and Dota 2, jogging, and appreciating nature.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                            Skills
                        </h2>
                        <div className={`w-12 h-1 rounded-full mb-8 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                        <div className="space-y-5">
                            {Object.entries(skills).map(([category, items]) => {
                                const colors = skillColors[category] || skillColors.tools;
                                return (
                                    <div key={category}>
                                        <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-2.5`}>
                                            {category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map(skill => (
                                                <span
                                                    key={skill}
                                                    className={`px-2.5 py-1 text-sm rounded-md font-medium border ${
                                                        isDarkMode ? colors.dark : colors.light
                                                    }`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

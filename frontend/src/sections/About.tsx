type Props = {
    isDarkMode: boolean;
    skills: Record<string, string[]>;
}

export default function About({ isDarkMode, skills}: Props) {
    return(
        <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800':'bg-white'}`}>
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                            About Me
                        </h2>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-5 leading-relaxed`}>
                            ML/AI Engineer with hands-on experience building end-to-end machine learning pipelines,
                            computer vision systems, and full-stack applications. Proficient in Python, PyTorch, TensorFlow,
                            and modern frameworks like React and FastAPI. Passionate about solving real-world problems
                            through data-driven solutions and scalable engineering.
                        </p>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                            When I'm not coding, you'll find me playing online games like Valorant and Dota 2, jogging, and appreciating nature.
                        </p>
                    </div>
                    <div>
                        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                            Skills
                        </h2>
                        <div className="space-y-5">
                            {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h4 className={`text-sm font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-2.5`}>
                                    {category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <span
                                    key={skill}
                                    className={`px-3 py-1 text-sm rounded-lg font-medium ${
                                        isDarkMode
                                            ? 'bg-gray-700 text-gray-200 border border-gray-600'
                                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                                    }`}
                                    >
                                    {skill}
                                    </span>
                                ))}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

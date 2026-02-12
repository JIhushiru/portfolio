type Props = {
    isDarkMode: boolean;
    skills: Record<string, string[]>;
}

export default function About({ isDarkMode, skills}: Props) {
    return(
        <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900':'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
                        About Me
                    </h2>                       
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed text-justify`}>
                            ML/AI Engineer with hands-on experience building end-to-end machine learning pipelines,
                            computer vision systems, and full-stack applications. Proficient in Python, PyTorch, TensorFlow,
                            and modern frameworks like React and FastAPI. Passionate about solving real-world problems
                            through data-driven solutions and scalable engineering.
                        </p>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed text-justify`}>
                            When I'm not coding, you'll find me playing online games like Valorant and Dota 2, jogging, and appreciating nature.
                        </p>                                                
                    </div>
                    <div>
                        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                            Skills
                        </h2>
                        <div className="space-y-6">
                            {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-3 capitalize`}>{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <span 
                                    key={skill} 
                                    className={`px-3 py-1 ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-sm rounded-full`}
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
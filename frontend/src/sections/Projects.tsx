import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  source?: string;
  screenshot?: string;
  noZoom?: boolean;
};

type Props = {
  isDarkMode: boolean;
  projects: Project[];
};

type Filter = 'all' | 'live' | 'source';

const filterDefs: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'live', label: 'Live Demo' },
  { key: 'source', label: 'Source Only' },
];

export default function Projects({ isDarkMode, projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(0.05);

  const filterFn = (key: Filter) => (p: Project) => {
    if (key === 'live') return p.link && p.link.trim() !== '';
    if (key === 'source') return (!p.link || p.link.trim() === '') && p.source && p.source.trim() !== '';
    return true;
  };

  const counts: Record<Filter, number> = {
    all: projects.length,
    live: projects.filter(filterFn('live')).length,
    source: projects.filter(filterFn('source')).length,
  };

  const filtered = projects.filter(filterFn(activeFilter));

  return (
    <section id="projects" className={`relative overflow-hidden py-20 md:py-28 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <NeuralBackground isDarkMode={isDarkMode} />
      <div className="relative max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="reveal-up">
          <h2 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
            Featured Projects
          </h2>
          <div className={`w-12 h-1 rounded-full mb-4 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl text-pretty`}>
            A selection of projects spanning machine learning, computer vision, and full-stack development.
          </p>

          <div className="flex gap-2 mb-10">
            {filterDefs.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg border transition-all active:scale-[0.98] ${
                  activeFilter === f.key
                    ? 'bg-blue-600 text-white border-transparent shadow-sm shadow-blue-600/30'
                    : isDarkMode
                      ? 'border-gray-700/60 text-gray-400 hover:text-white hover:bg-gray-800'
                      : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {f.label}
                <span className={`ml-1.5 text-xs ${activeFilter === f.key ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {counts[f.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((project) => (
            <div key={`${activeFilter}-${project.title}`} className="reveal-up animate-[fade-in_0.3s_ease-out]">
              <div
                className={`group h-full flex flex-col rounded-xl border overflow-hidden hover:-translate-y-0.5 transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/[0.07]'
                    : 'bg-white border-gray-200 shadow-sm hover:border-blue-300/60 hover:shadow-md hover:shadow-blue-600/5'
                }`}
              >
                {project.screenshot ? (
                  <div className="overflow-hidden">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className={`h-44 w-full object-cover transition-transform duration-200${project.noZoom ? '' : ' group-hover:scale-[1.02]'}`}
                    />
                  </div>
                ) : (
                  <div className={`h-44 flex items-center justify-center ${isDarkMode ? 'bg-linear-to-br from-gray-800 to-gray-700' : 'bg-linear-to-br from-gray-100 to-gray-200'}`}>
                    <span className={`text-4xl ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 text-xs rounded-md font-medium border ${
                          isDarkMode ? 'bg-gray-700/60 text-gray-300 border-gray-600/40' : 'bg-gray-100 text-gray-600 border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex space-x-4 pt-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                    {project.link && project.link.trim() !== '' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-medium transition-colors ${
                          isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                      </a>
                    )}
                    {project.source && project.source.trim() !== '' && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-medium transition-colors ${
                          isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        Source <Github className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

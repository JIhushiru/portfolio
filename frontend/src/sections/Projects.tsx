import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
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
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal-up">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Featured Projects
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl`}>
            A selection of projects spanning machine learning, computer vision, and full-stack development.
          </p>

          <div className="flex gap-2 mb-8">
            {filterDefs.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${
                  activeFilter === f.key
                    ? 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {f.label}
                <span className={`ml-1.5 text-xs ${activeFilter === f.key ? 'text-blue-200' : isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {counts[f.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children reveal-up">
          {filtered.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl border overflow-hidden hover:-translate-y-1 transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700/50 hover:border-gray-600'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {project.screenshot ? (
                <div className="overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={project.title}
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
              <div className="p-5">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
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
                      Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
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
                      Source <Github className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

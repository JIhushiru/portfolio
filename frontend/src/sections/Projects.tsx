import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  source?: string;
  screenshot?: string;
};

type Props = {
  isDarkMode: boolean;
  projects: Project[];
};

export default function Projects({ isDarkMode, projects }: Props) {
  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {project.screenshot ? (
                <img src={project.screenshot} alt={project.title} className="h-48 w-full object-cover" />
              ) : (
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              )}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.link && project.link.trim() !== '' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm transition-colors ${
                        isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  {project.source && project.source.trim() !== '' && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Source Code <Github className="w-4 h-4 ml-1" />
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

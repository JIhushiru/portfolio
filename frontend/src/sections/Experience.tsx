import { Briefcase } from 'lucide-react';
import NeuralBackground from '../components/NeuralBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Job = {
  company: string;
  role: string;
  location: string;
  duration: string;
  logo: string;
  points: string[];
};

type Props = {
  isDarkMode: boolean;
  experience: Job[];
}

export default function Experience({ isDarkMode, experience }: Props) {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className={`relative overflow-hidden py-20 md:py-28 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <NeuralBackground isDarkMode={isDarkMode} />
      <div className="relative max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="reveal-up">
          <h2 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
            Experience
          </h2>
          <div className={`w-12 h-1 rounded-full mb-10 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        <div ref={listRef} className="space-y-6 reveal-up">
          {experience.map((job, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-gray-700/50 bg-gray-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/[0.07]'
                  : 'border-gray-200 bg-white shadow-sm hover:border-blue-300/60 hover:shadow-md hover:shadow-blue-600/5'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-lg shrink-0 overflow-hidden flex items-center justify-center ${
                    job.logo
                      ? isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                      : isDarkMode ? 'bg-blue-900/40' : 'bg-blue-50'
                  }`}
                >
                  {job.logo ? (
                    <img src={job.logo} alt={`${job.company} logo`} className="object-cover w-full h-full" />
                  ) : (
                    <Briefcase className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {job.role}
                    </h3>
                    <span className={`text-xs font-medium whitespace-nowrap tabular-nums ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {job.duration}
                    </span>
                  </div>
                  <p className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-1`}>{job.company}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                    {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className={`flex items-start text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      >
                        <span className={`mt-1.5 mr-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${isDarkMode ? 'bg-blue-400/70' : 'bg-blue-600'}`}></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

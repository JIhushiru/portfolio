import { GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type EducationItem = {
  school: string;
  degree: string;
  location: string;
  duration: string;
  highlights: string[];
};

type Props = {
  isDarkMode: boolean;
  education: EducationItem[];
};

export default function Education({ isDarkMode, education }: Props) {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div ref={sectionRef} className="reveal-up">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className={`border rounded-xl p-6 transition-all ${
                  isDarkMode ? 'border-gray-700/50 bg-gray-900 hover:border-gray-600' : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-lg shrink-0 flex items-center justify-center ${
                      isDarkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.degree}
                    </h3>
                    <p className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-1`}>
                      {item.school}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                      {item.location} · {item.duration}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((point, i) => (
                        <li
                          key={i}
                          className={`flex items-start text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          <span className={`mt-1.5 mr-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
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
      </div>
    </section>
  );
}

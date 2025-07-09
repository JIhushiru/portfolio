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
  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 hover:shadow-lg transition-shadow ${
                isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  <img src={job.logo} alt={job.company} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {job.role}
                  </h3>
                  <p className="text-lg text-blue-600 mb-2">{job.company}</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {job.location} • {job.duration}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        <span className="text-blue-600 mr-2">•</span>
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
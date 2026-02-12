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
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 transition-all ${
                isDarkMode ? 'border-gray-700/50 bg-gray-800 hover:border-gray-600' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-lg shrink-0 overflow-hidden ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  <img src={job.logo} alt={job.company} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {job.role}
                  </h3>
                  <p className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-1`}>{job.company}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                    {job.location} · {job.duration}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
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
    </section>
  );
}

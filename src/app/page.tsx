import Image from 'next/image';
import me from '/public/me.jpeg';
import MovingCar from '@/components/MovingCar';
import { getDictionary, t } from '@/lib/i18n';

export default async function AboutMe() {
  const dict = await getDictionary();

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Moving car in the background */}
      <MovingCar />

      {/* Main content above the car */}
      <div className="relative z-10 px-6 py-12">
        <header className="mb-12 text-center">
          <h1 id="who" className="text-4xl font-bold text-gray-800 dark:text-white">
            {t(dict, 'home.who')}
          </h1>
        </header>

        <main className="max-w-3xl mx-auto flex flex-col space-y-8">

          {/* About Me */}
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                <Image
                  src={me}
                  alt="Portrait"
                  priority
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 id="about" className="text-2xl font-semibold text-gray-800 dark:text-white">
                {t(dict, 'home.about')}
              </h2>
              <p id="me" className="text-gray-700 dark:text-gray-300">
                {t(dict, 'home.aboutText')}
              </p>
            </div>
          </section>


          {/* Education & Experience */}
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 id="background" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
              {t(dict, 'home.education')}
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">

              {/* Datamatiker */}
              <li>
                <p className="font-medium">{t(dict, 'home.datamatiker')}</p>
                <div className="mt-2 ml-4">
                  <p className="font-semibold">{t(dict, 'home.grades')}</p>
                  {/* Keep grade list static since numbers don't need translation */}
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>14-06-2023 – {t(dict, 'home.exams.firstYear')}: 10, (60 ECTS)</li>
                    <li>12-01-2024 – {t(dict, 'home.exams.systemDev')}: 7, (10 ECTS)</li>
                    <li>17-01-2024 – {t(dict, 'home.exams.programming')}: 10, (20 ECTS)</li>
                    <li>19-06-2024 – {t(dict, 'home.exams.elective')}: 7, (30 ECTS)</li>
                    <li>07-11-2024 – {t(dict, 'home.exams.internshipExam')}: 12, (15 ECTS)</li>
                    <li>27-01-2025 – {t(dict, 'home.exams.finalExam')}: 10, (15 ECTS)</li>
                    <li className="font-medium mt-1">{t(dict, 'home.totalECTS')} 150</li>
                  </ul>
                </div>
              </li>

              {/* Internship */}
              <li>
                <p className="font-medium">{t(dict, 'home.internship')}</p>
              </li>

              {/* Top-up */}
              <li>
                <p className="font-medium">{t(dict, 'home.topup')}</p>
                <div className="mt-2 ml-4">
                  <p className="font-semibold">{t(dict, 'home.grades')}</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>04-06-2025 – {t(dict, 'home.exams.sysInt')}: 7, (10 ECTS)</li>
                    <li>10-06-2025 – {t(dict, 'home.exams.largeSystems')}: 12, (10 ECTS)</li>
                    <li>19-06-2025 – {t(dict, 'home.exams.fullstack')}: 7, (10 ECTS)</li>
                    <li className="font-medium mt-1">{t(dict, 'home.currentECTS')} 30</li>
                  </ul>
                </div>
              </li>

              {/* Technologies */}
              <li>
                <div className="mt-6">
                  <h3 id="tech" className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {t(dict, 'home.technologies')}
                  </h3>
                  <p>{t(dict, 'home.techIntro')}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Most */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        {t(dict, 'home.most')}
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>JavaScript & TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>REST API</li>
                        <li>HTML & CSS</li>
                        <li>Scrum & Agile</li>
                        <li>Git & GitHub</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>

                    {/* Moderate */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        {t(dict, 'home.moderate')}
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>C# & .NET</li>
                        <li>GraphQL</li>
                        <li>DevOps (Docker, CI/CD, GitHub Actions)</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Testing (Jest, Cypress & Selenium)</li>
                      </ul>
                    </div>

                    {/* Least */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        {t(dict, 'home.least')}
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Python</li>
                        <li>Kubernetes</li>
                        <li>React Flow</li>
                        <li>Monitoring & Metrics (Prometheus, Grafana)</li>
                        <li>Firebase</li>
                        <li>RabbitMQ</li>
                        <li>Redis</li>
                        <li>Microsoft Azure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center space-y-4">
            <h2 id="contact" className="text-2xl font-bold text-gray-800 dark:text-white">
              {t(dict, 'home.contactTitle')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base max-w-md mx-auto">
              {t(dict, 'home.contactText')}
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                {t(dict, 'home.email')}:{" "}
                <a href="mailto:nicolai@kunkel.dk" className="text-blue-600 dark:text-blue-400 underline">
                  nicolai@kunkel.dk
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t(dict, 'home.linkedin')}:{" "}
                <a
                  href="https://www.linkedin.com/in/nicolai-bo-kunkel-411334179/"
                  className="text-blue-600 dark:text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nicolai Bo Kunkel
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

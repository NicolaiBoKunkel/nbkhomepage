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
            <h2
              id="background"
              className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center"
            >
              {t(dict, "home.educationAndExperience")}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Education */}
              <div className="bg-white/70 dark:bg-gray-900/40 rounded-2xl p-5 shadow-sm border border-gray-200/60 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {t(dict, "home.education")}
                </h3>

                <div className="space-y-4">
                  {/* Datamatiker (Zealand) */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center">
                      <a
                        href="https://www.zealand.dk/fuldtid/datamatiker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit Zealand website"
                        className="group shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center transition transform hover:scale-110 hover:shadow-md cursor-pointer"
                      >
                        <Image
                          src="/images/zealand_logo.jpg"
                          alt="Zealand"
                          width={48}
                          height={48}
                          className="object-contain w-full h-full transition-opacity group-hover:opacity-90"
                        />
                      </a>
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {t(dict, "home.datamatikerTitle")}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {t(dict, "home.datamatikerPeriod")}
                      </p>
                    </div>
                  </div>

                  {/* Top-up */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center">
                      <a
                        href="https://www.ek.dk/videregaaende-uddannelser/softwareudvikling"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit KEA – Copenhagen School of Design and Technology"
                        className="group shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center transition transform hover:scale-110 hover:shadow-md cursor-pointer"
                      >
                        <Image
                          src="/images/ek_logo.jpg"
                          alt="KEA – Copenhagen School of Design and Technology"
                          width={48}
                          height={48}
                          className="object-contain w-full h-full transition-opacity group-hover:opacity-90"
                        />
                      </a>
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {t(dict, "home.topupTitle")}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {t(dict, "home.topupPeriod")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience / Internships */}
              <div className="bg-white/70 dark:bg-gray-900/40 rounded-2xl p-5 shadow-sm border border-gray-200/60 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {t(dict, "home.experience")}
                </h3>

                <div className="space-y-4">
                  {/* Datamatiker Internship (Velliv) */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center">
                      <a
                        href="https://velliv.dk"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit Velliv"
                        className="group shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center transition transform hover:scale-110 hover:shadow-md cursor-pointer"
                      >
                        <Image
                          src="/images/velliv_logo.jpg"
                          alt="Velliv"
                          width={48}
                          height={48}
                          className="object-contain w-full h-full transition-opacity group-hover:opacity-90"
                        />
                      </a>
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {t(dict, "home.dainternshipTitle")}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {t(dict, "home.dainternshipPeriod")}
                      </p>
                    </div>
                  </div>

                  {/* Top-up Internship (Pentia) */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center">
                      <a
                        href="https://pentia.dk"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit Pentia"
                        className="group shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center transition transform hover:scale-110 hover:shadow-md cursor-pointer"
                      >
                        <Image
                          src="/images/pentia_logo.jpg"
                          alt="Pentia"
                          width={48}
                          height={48}
                          className="object-contain w-full h-full transition-opacity group-hover:opacity-90"
                        />
                      </a>
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {t(dict, "home.topupInternshipTitle")}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {t(dict, "home.topupInternshipPeriod")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h3 id="tech" className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {t(dict, "home.technologies")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{t(dict, "home.techIntro")}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {/* Most */}
                <div className="bg-white/70 dark:bg-gray-900/40 rounded-2xl p-4 border border-gray-200/60 dark:border-gray-700/50">
                  <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {t(dict, "home.most")}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>JavaScript & TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>REST API</li>
                    <li>HTML & CSS</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>

                {/* Moderate */}
                <div className="bg-white/70 dark:bg-gray-900/40 rounded-2xl p-4 border border-gray-200/60 dark:border-gray-700/50">
                  <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {t(dict, "home.moderate")}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>C# & .NET</li>
                    <li>GraphQL</li>
                    <li>DevOps (Docker, CI/CD, GitHub Actions)</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Testing (Jest, Cypress & Selenium)</li>
                    <li>Scrum & Agile</li>
                    <li>Git & GitHub</li>
                  </ul>
                </div>

                {/* Least */}
                <div className="bg-white/70 dark:bg-gray-900/40 rounded-2xl p-4 border border-gray-200/60 dark:border-gray-700/50">
                  <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {t(dict, "home.least")}
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
                    <li>Storybook</li>
                    <li>Azure DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
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

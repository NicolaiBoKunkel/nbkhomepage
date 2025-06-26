import Image from 'next/image';
import me from '/public/me.jpeg';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Hvem er jeg?</h1>
      </header>

      <main className="max-w-3xl mx-auto flex flex-col space-y-8">
        
        {/* About Me */}
        <section className="bg-gray-100 p-6 rounded-2xl shadow">
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
            <h2 className="text-2xl font-semibold text-gray-800">Om mig</h2>
            <p className="text-gray-700">
              Jeg hedder Nicolai Bo Kunkel, er 25 år gammel, nyuddannet datamatiker og læser videre på 2. semester af min overbygningsprofessionsbachelor i softwareudvikling på Københavns Erhvervsakademi.
            </p>
            <p className="text-gray-700">
            </p>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Uddannelse & Erfaring</h2>
          <ul className="space-y-4 text-gray-700">
            
            {/* Datamatiker */}
            <li>
              <p className="font-medium">Datamatikeruddannelsen – Zealand - Sjællands Erhvervsakademi i Roskilde (2022–2025)</p>
              <div className="mt-2 ml-4">
                <p className="font-semibold">Karakterer:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>14-06-2023 – Førsteårsprøven: 10, (60 ECTS)</li>
                  <li>12-01-2024 – Systemudviklingsprøven: 7, (10 ECTS)</li>
                  <li>17-01-2024 – Programmeringsprøven: 10, (20 ECTS)</li>
                  <li>19-06-2024 – Valgfagsprøven (Webudvikling): 7, (30 ECTS)</li>
                  <li>07-11-2024 – Praktikprøven: 12, (15 ECTS)</li>
                  <li>27-01-2025 – Afsluttende eksamensprojekt: 10, (15 ECTS)</li>
                  <li className="font-medium mt-1">Samlet ECTS: 150</li>
                </ul>
              </div>
            </li>

            {/* Internship */}
            <li>
              <p className="font-medium">Datamatiker-praktik som frontend-udvikler hos Velliv, Pension & Livsforsikring (2024)</p>
            </li>

            {/* Top-up */}
            <li>
              <p className="font-medium">Professionsbachelor i Softwareudvikling – KEA - Københavns Erhvervsakademi (2025–2026)</p>
              <div className="mt-2 ml-4">
                <p className="font-semibold">Karakterer:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>04-06-2025 – Systemintegration: 7, (10 ECTS)</li>
                  <li>10-06-2025 – Udvikling af store systemer: 12, (10 ECTS)</li>
                  <li>19-06-2025 – Full-Stack Web Development: 7, (10 ECTS)</li>
                  <li className="font-medium mt-1">Nuværende ECTS: 30</li>
                </ul>
              </div>
            </li>

            <li>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Teknologier & Erfaring</h3>
                <p>Nedenunder har jeg angivet de teknologier og relevante emner, hvor jeg har mest erfaring og kendskab. 
                  Listerne vil løbende blive opdateret, i takt med at jeg tilegner mig ny viden og erfaring.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Most */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-600 mb-1">📗 Størst erfaring</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>JavaScript & TypeScript</li>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>REST API</li>
                      <li>HTML & CSS</li>
                      <li>Scrum & Agile-metodologier</li>
                      <li>Git & GitHub</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>

                  {/* Moderate */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-600 mb-1">📙 Moderat erfaring</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>C# & .NET</li>
                      <li>GraphQL</li>
                      <li>DevOps (Docker, CI/CD, GitHub Actions)</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                      <li>Testing (JEST, Cypress & Selenium)</li>
                    </ul>
                  </div>

                  {/* Least */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-600 mb-1">📘 Begynder </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
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
    <section className="bg-gray-100 p-6 rounded-2xl shadow-lg text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Lad os komme i kontakt</h2>
      <p className="text-gray-600 text-base max-w-md mx-auto">
        Du er altid velkommen til at række ud, hvis du har spørgsmål, projekter eller bare vil netværke.
      </p>
      <div className="space-y-2">
        <p className="text-gray-700">
          Email:{" "}
          <a href="mailto:nicolai@kunkel.dk" className="text-blue-600 underline">
            nicolai@kunkel.dk
          </a>
        </p>
        <p className="text-gray-700">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/nicolai-bo-kunkel-411334179/"
            className="text-blue-600 underline"
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
  );
}

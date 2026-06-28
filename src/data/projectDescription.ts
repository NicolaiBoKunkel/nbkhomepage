export const projectDescriptions: Record<
  string,
  { short: string; long: string }
> = {
  'e-commerce-project': {
    short: 'E-commerce projekt som er bygget efter en microservices arkitektur.',
    long: 'E-commerce projekt som er bygget efter en microservices arkitektur. Projektet består af 4 microservices med egne databaser, en API gateway og en frontend som er bygget med Next.js. RabbitMQ er brugt til asynkron kommunikation mellem microservices. Alle microservices er orkestreret med Docker og Kubernetes, og deployet på Docker Hub. Projektet kan pt. kun køres lokalt med Docker Desktop.',
  },
  'Flowmaster2': {
    short: 'Gruppeprojekt til opsættelse af brugerdefinerede og interaktive flowcharts.',
    long: 'Gruppeprojekt til opsættelse af brugerdefinerede og interaktive flowcharts. Projectet er bygget med Next.js, React Flow, og hostes på Vercel.',
  },
  'nbkhomepage': {
    short: 'Dette projekt udgør min udviklerportfolio som du befinder dig på nu.',
    long: 'Dette projekt udgør min udviklerportfolio som du befinder dig på nu. Siden er bygget med Next.js, og hostes på Vercel.',
  },
  'nextjs-moviedb': {
    short: 'Frontend til et fullstack projekt som benytter data fra TMDB.',
    long: 'Frontend til et fullstack projekt som benytter data fra TMDB. Siden er bygget med Next.js, og hostes på Vercel. Bemærk! Backend går i dvale ved inaktivitet, så siden kan være langsom om at indlæse første gang.',
  },
  'kanbanBoard': {
    short: 'Interaktivt kanban board demo.',
    long: 'Interaktivt kanban board demo. Projectet er bygget med Vue 3, Vite, Vuetify og hostes på Vercel.',
  },
  'flow-management-platform': {
    short: 'Bachelorprojekt til opsættelse af brugerdefinerede og interaktive flowcharts.',
    long: 'Bachelorprojekt til opsættelse af brugerdefinerede og interaktive flowcharts. Projectet er bygget med Next.js, React Flow, og frontend hostes på Vercel, imens backend hostes på Railway. Den benytter både en PostgreSQL og Neo4j database, og tillader real-tids samarbejde mellem brugere',
  },
};

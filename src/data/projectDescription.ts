// src/data/projectDescription.ts

export const projectDescriptions: Record<
  string,
  { short: string; long: string }
> = {
  'e-commerce-project': {
    short: 'E-commerce projekt som er bygget efter en microservices arkitektur.',
    long: 'E-commerce projekt som er bygget efter en microservices arkitektur. Projektet består af 4 microservices med egne databaser, en API gateway og en frontend som er bygget med Next.js. RabbitMQ er brugt til asynkron kommunikation mellem microservices. Alle microservices er orkestreret med Docker og Kubernetes, og deployet på Docker Hub.',
  },
  'Flowmaster2': {
    short: 'Projekt til opsættelse af brugerdefinerede og interaktive flowcharts.',
    long: 'Projekt til opsættelse af brugerdefinerede og interaktive flowcharts. Projectet er bygget med Next.js, React Flow, og hostes på Vercel.',
  },
  'nbkhomepage': {
    short: 'Dette projekt udgør min udviklerportfolio som du befinder dig på nu.',
    long: 'Dette projekt udgør min udviklerportfolio som du befinder dig på nu. Siden er bygget med Next.js, og hostes på Vercel.',
  },
  'nextjs-movie-backend': {
    short: 'Backend til et fullstack projekt som benytter data fra TMDB.',
    long: 'Backend til et fullstack projekt som benytter data fra TMDB. Mongodb er brugt som database til brugerdata. Backenden er bygget med Node.js og Express, og hostes på Render.',
  },
  'nextjs-moviedb': {
    short: 'Frontend til et fullstack projekt som benytter data fra TMDB.',
    long: 'Frontend til et fullstack projekt som benytter data fra TMDB. Siden er bygget med Next.js, og hostes på Vercel. Bemærk! Backend går i dvale ved inaktivitet, så siden kan være langsom om at indlæse første gang.',
  },
};

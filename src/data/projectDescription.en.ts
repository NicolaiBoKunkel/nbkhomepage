export const projectDescriptions_en: Record<string, { short: string; long: string }> = {
  'e-commerce-project': {
    short: 'E-commerce project built with a microservices architecture.',
    long:
      'E-commerce project built with a microservices architecture. The project consists of 4 microservices with their own databases, an API gateway, and a frontend built with Next.js. RabbitMQ is used for asynchronous communication between microservices. All microservices are orchestrated with Docker and Kubernetes and published on Docker Hub. Currently, the project can only be run locally with Docker Desktop.',
  },
  'Flowmaster2': {
    short: 'Group project for setting up customizable, interactive flowcharts.',
    long:
      'Group project for creating customizable, interactive flowcharts. The project is built with Next.js, React Flow, and is hosted on Vercel.',
  },
  'nbkhomepage': {
    short: "This project is my developer portfolio that you're viewing now.",
    long:
      "This project is my developer portfolio that you're Currently viewing now. The site is built with Next.js and hosted on Vercel.",
  },
  'nextjs-movie-backend': {
    short: 'Backend for my full-stack project that uses TMDB data.',
    long:
      'Backend for my full-stack project that uses TMDB data. MongoDB stores user data. The backend is built with Node.js and Express, and is hosted on Render.',
  },
  'nextjs-moviedb': {
    short: 'Frontend for a full-stack project that uses TMDB data.',
    long:
      'Frontend for a full-stack project that uses TMDB data. The site is built with Next.js and hosted on Vercel. Note: the backend sleeps when idle, so the site may be slow to load the first time.',
  },
};

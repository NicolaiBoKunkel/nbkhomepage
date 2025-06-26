// src/data/projectImages.ts

export const projectImages: Record<
  string,
  { src: string; caption?: string }[]
> = {
  "e-commerce-project": [
    {
      src: "/images/E-Commerce.architecture.png",
      caption: "Systemarkitektur",
    },
    {
        src: "/images/E-Commerce.saga.png",
        caption: "Saga-diagram",
    }
  ],
    "nextjs-moviedb": [
        {
        src: "/images/moviedb.architecture.png",
        caption: "Systemarkitektur",
        },
        {
        src: "/images/moviedb.seochart.png",
        caption: "SEO-diagram",
        }
    ],
    "nextjs-movie-backend": [
        {
        src: "/images/moviedb.architecture.png",
        caption: "Systemarkitektur",
        },
        {
        src: "/images/moviedb.seochart.png",
        caption: "SEO-diagram",
        }
    ],
};

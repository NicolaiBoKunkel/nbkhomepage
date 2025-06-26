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
    "Flowmaster2": [
        {
        src: "/images/flowmaster1.png",
        caption: "Redigering af flow",
        },
        {
        src: "/images/flowmaster2.png",
        caption: "Visualisering af flow",
        },
        {
        src: "/images/flowmaster3.png",
        caption: "Afprøvning af flow",
        }
    ]
};

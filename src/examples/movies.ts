export type MovieType = {
  id?: number;
  title: string;
  year: number;
};

export const movies: MovieType[] = [
  {
    id: 1,
    title: 'Spider Man',
    year: 2019,
  },
  {
    id: 2,
    title: 'Avengers, The',
    year: 2018,
  },
  {
    id: 3,
    title: 'Rocky',
    year: 1990,
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    year: 1996,
  },
];

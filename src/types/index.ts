export type Character = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type QueryResult<T> = {
  code: number;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
};

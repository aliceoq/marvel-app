export type Item = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type IconProps = {
  width?: number;
  height?: number;
}

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

export type Size = "bigger" | "big" | "regular" | "small" | "smaller";

export interface Item {
  id: string;
  name?: string;
  title?: string;
  fullName?: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface Character extends Item {
  comics: {
    available: number;
    collectionURI: string;
    items: {
      name: string;
      resourceURI: string;
    }[];
  };
  urls: { type: string; url: string }[];
}

export interface Creator extends Item {
  comics: {
    available: number;
    collectionURI: string;
    items: {
      name: string;
      resourceURI: string;
    }[];
  };
  urls: { type: string; url: string }[];
}

export interface Comic extends Item {
  creators: {
    available: number;
    collectionURI: string;
    items: {
      name: string;
      role: string;
      resourceURI: string;
    }[];
  };
  characters: {
    available: number;
    collectionURI: string;
    items: {
      name: string;
      role: string;
      resourceURI: string;
    }[];
  };
  urls: { type: string; url: string }[];
}

export type IconProps = {
  width?: number;
  height?: number;
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
  etag: string;
};

export type Size = "bigger" | "big" | "regular" | "small" | "smaller";

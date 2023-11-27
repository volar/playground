import React from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */
type PersonProps = {
  name: string;
  myAge: number;
  isFemale: boolean;
};

type AnimalListType = {
  animals: string[];
  animalType: 'bird' | 'fish' | 'mamal';
};

type SomeObjExamples = {
  obj: object;
  obj2: {};
  item: {
    id: string;
    name: string;
  };
  items: {
    id: string;
    name: string;
  }[];
};

type Item = {
  id: string;
  name: string;
};

type Items = {
  item: Item;
  items: Item[];
};

type CustomItemHash = {
  [key: string]: Item;
};

type CustomItemHash2 = {
  [key: number]: string;
};

type Functions = {
  onHover: () => void;
  onChange: (id: number) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const someFunc = (a: number, b: number) => {
  return a + b;
};

type OptionalProps = {
  required: string;
  optional?: string;
};

type OptionalProps2 = {
  required: string;
  optional?: string;
};

interface OptionalProps3 {
  required: string;
  optional?: string;
}

export {};

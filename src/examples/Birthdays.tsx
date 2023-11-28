import React, { useState } from 'react';
import persons from '../data/birthdaysData';

interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

function List({ people }: { people: Person[] }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img width="50px" src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default function Birthdays() {
  const [people, setPeople] = useState(persons);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

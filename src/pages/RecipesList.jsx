/* eslint-disable */
import recipes from '../data/recipesData';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipesList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
      <Poem />
    </div>
  );
}

const poem = {
  lines: ['I write, erase, rewrite', 'Erase again, and then', 'A poppy blooms.'],
};

function Poem() {
  const output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(<hr key={`${i}-separator`} />);
    output.push(<p key={`${i}-text`}>{line}</p>);
  });
  // Remove the first <hr />
  output.shift();

  return <article>{output}</article>;
}

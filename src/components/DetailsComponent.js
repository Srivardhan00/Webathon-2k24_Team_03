import React from "react";
import { useParams } from "react-router-dom";
import data from "../db/data"; // Import your data directly
import "./DetailsComponent.css";
function DetailsComponent() {
  const { id } = useParams();

  // Now you can use the `id` in your component
  let recipe = data.find((product) => product.id === id); // Use product.id to compare with id

  if (!recipe) {
    return <div>Recipe not found!</div>; // Render a message if recipe is not found
  }

  return (
    <div className="recipe-container">
      <h1 className="recipe-name h1">{recipe.name}</h1>
      <img src={recipe.img} alt={recipe.name} className="recipe-image" />
      <div className="recipe-info d-flex gap-5 mt-3 ">
        <h2>Details:</h2>
        <p>Preparation Time: {recipe.prepareTime} minutes</p>
        <p>Cook Time: {recipe.cookTime} minutes</p>
        <p>Servings: {recipe.servings}</p>
        <p>
          Ratings: {recipe.ratings} ({recipe.users} votes)
        </p>
      </div>
      <div className="recipe-details">
        <div className="recipe-info">
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-info">
          <h2>Instructions:</h2>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;

import React from 'react';
import './recipe.styles.css';

export const Recipe = (props) => (
  <div className="recipe">
    <h1 className="recipe_title">{props.title}</h1>
    <div className="image_div">
      <img className="image" src={props.image} alt="" />
    </div>
    <p className="calories">Calories: {parseInt(props.calories)} Kcal</p>
    <h2>Ingredients:</h2>
    <ul className="ingredients">
      {props.ingredients.map((ingredient, index) => (
        <li className="ingredient" key={index}>
          <i className="fas fa-caret-right" /> {ingredient.text}
        </li>
      ))}
    </ul>
  </div>
);

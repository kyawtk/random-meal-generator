import React from "react";
const Meal = (props) => {
  let { name, tags, category, area, instructions, ingredients, image } = props;
  
  return (
    <div className="meal-wrapper">
      <article>
        <img src={image} />
        <div className="text">
          <h1>{name}</h1>
          <p>{instructions}</p>
        </div>
      </article>
      <div className="info">
        <p>
          <b style={{ display: `${category ? "block" : "none"}` }}>
            Category : {category}
          </b>
        </p>
        <p>
          <b style={{ display: `${area ? "block" : "none"}` }}>Area : {area}</b>
        </p>
        <p>
          <b style={{ display: `${tags ? "block" : "none"}` }}>Tags : {tags}</b>
        </p>
      </div>
      <div className="ingredients" >
          <h2 style={{ display: `${name ? "block" : "none"}` }}>Ingredients:</h2>
          {ingredients.map(i =>{
              return <li key = {i}>{i}</li>
          })}
      </div>
    </div>
  );
};

export default Meal;

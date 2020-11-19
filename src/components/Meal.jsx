import React from "react";
const Meal = (props) => {
  let {vid, name, tags, category, area, instructions, ingredients, image } = props;
  let vidsrc  = 'https://www.youtube.com/embed/'+ vid.slice(-11);
  return (
    <div className="meal-wrapper" style={{display:`${name?"block":'none'}`}}>
      <article>
        <img src={image} alt="image" />
        <div className="text">
          <h1>{name}</h1>
          <p>{instructions}</p>
        </div>
      </article>
      <div className="info">
        <p>
          <b >
            Category : {category}
          </b>
        </p>
        <p>
          <b>Area : {area}</b>
        </p>
        <p>
          <b>Tags : {tags}</b>
        </p>
      </div>
      <div className="ingredients">
        <h2 >Ingredients:</h2>
        {ingredients.map((i, index) => {
          return <li key={Math.random() * index}>{i}</li>;
        })}
      </div>
      <div className="video" >
      <iframe title="video"  src={vidsrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Meal;

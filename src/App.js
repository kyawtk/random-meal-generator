import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Meal from "./components/Meal";
import "./App.css";

function App() {
  let [mealname, setmealname] = useState("");
  let [area, setarea] = useState("");
  let [instructions, setinstructions] = useState("");
  let [tags, settags] = useState("");
  let [category, setcategory] = useState("");
  let [ingredients, setingredients] = useState([]);
  let [image, setimage] = useState("");

  const getmeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        let meal = data.meals[0];
        const getingredients = [];
        
        setmealname(meal.strMeal);
        setarea(meal.strArea);
        setinstructions(meal.strInstructions);
        settags(meal.strTags);
        setcategory(meal.strCategory);
        setimage(meal.strMealThumb);

        // Get all ingredients from the object. Up to 20
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            getingredients.push(
              `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
          } else {
            // Stop if no more ingredients
            break;
          }
        }
        setingredients(getingredients);
      });
  };
  return (
    <div className="App">
      <header>
        <h1>Feeling hungry?</h1>
        <button onClick={getmeal}>Get a delicious meal </button>
      </header>

      <Meal
        name={mealname}
        tags={tags}
        ingredients={ingredients}
        area={area}
        instructions={instructions}
        category={category}
        image={image}
      />
    </div>
  );
}

export default App;

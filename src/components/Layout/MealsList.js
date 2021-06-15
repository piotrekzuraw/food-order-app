import { useState, useEffect } from "react";
import classes from "../../styles/MealsList.module.css";
import Card from "../UI/Card.js";
import MealItem from "../Layout/MealItem.js";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    //funkcja wywoływana przez useEffect nie może zwracać promisa, trzeba ją opakować w drugą funkcję
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-74811-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json(); //z firebase zwróci obiekt, potrzebna tablica

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;

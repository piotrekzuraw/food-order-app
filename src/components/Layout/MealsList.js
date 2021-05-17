import classes from "../../styles/MealsList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 39.99,
  },
  {
    id: "m2",
    name: "Ramen",
    description: "A bowl full of flavour!",
    price: 39.99,
  },
  {
    id: "m3",
    name: "Gyoza Dumplings",
    description: "Pockets full of yummy filling",
    price: 19.99,
  },
  {
    id: "m4",
    name: "Tom Yum",
    description: "Spicy Thai soup with coconut milk and shrimps",
    price: 18.99,
  },
];

const MealsList = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default MealsList;

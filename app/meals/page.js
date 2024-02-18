import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/fetchFunctions/meal"; 

export default async function Meals() {
  // diferent way of fetching data
  const meals = await getMeals()
  return (
    <>
      <section className={classes.header}>
        <h1>
          Deliciuos meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
            Choose your favorite recipe and cook it yourself. 
        </p>
        <p className={classes.cta}>
            <Link href="/meals/share">
                Share Your Favorite Recipe
            </Link>
        </p>
      </section>
      <main className={classes.main}>
        <MealsGrid meals={meals}/>
      </main>
    </>
  );
}

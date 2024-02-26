import { getMeal } from "@/fetchFunctions/meal";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

// metadata has to be done differently in dynamic pages such as this form (for dyplaying in the tab with favicon)
export async function generateMetadat({params}){
  const meal = getMeal(params.mealSlug); 
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetails({params}) {
    const meal = getMeal(params.mealSlug); 

    if (!meal){
      notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />'); // creates line breaks in the summary.

  return (
    <>
      <section className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
                by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className={classes.summary}>{meal.summary}</p>
        </div>
      </section>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions,}}></p>
      </main>
    </>
  );
}

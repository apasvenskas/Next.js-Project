'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from "./meal";
import { revalidatePath } from "next/cache";

// extra validation
function isInvalidText(meal, text){
  return !meal.title || text.trim() == '';
}

 // a different way of submiting form that is available with next.js
export async function shareMeal(prevState, formData){
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }
    //extra validation
    if(isInvalidText(meal.title) || 
    isInvalidText(meal.summary) || 
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') 
    // !meal.image || meal.image.size === 0
    ){
      // diferent way messaging for error
      return {
        message: 'Invalid Input'
      }
    };

    await saveMeal(meal);
    revalidatePath('/meals'); //reload meals after evry submision so it is visable in the UI. 
    // with addition of , 'layout', entire site will be revalidated not just meals
    redirect('/meals');
  }
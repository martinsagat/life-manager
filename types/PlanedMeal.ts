import { Recipe } from "."

export enum MealType { 
    Breakfast = "Breakfast",
    Lunch = "Lunch",
    Dinner = "Dinner",
}

export type PlanedMeal = {
    id: string
    recipe: Recipe
    date: Date
    type: MealType
}
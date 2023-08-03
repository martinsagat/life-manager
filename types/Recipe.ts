import { Ingredient } from "."

export type Recipe = {
    id: string
    name: string
    ingredients: Ingredient[]
    isFavorite: boolean
  }
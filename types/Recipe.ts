import { Ingredient } from "."

export type Recipe = {
    id: string
    name: string
    img: string
    ingredients: Ingredient[]
    isFavorite: boolean
  }
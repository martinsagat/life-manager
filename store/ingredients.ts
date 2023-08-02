import { defineStore } from 'pinia'
import { Ingredient } from '@/types'

export interface IngredientsState {
  ingredients: Ingredient[]
}

export const useIngredientsStore = defineStore('ingredients', {

  state: (): IngredientsState => ({
    ingredients: [
      { id: "1", name: 'apple' },
      { id: "2", name: 'strawberry' },
      { id: "3", name: 'orange' },
      { id: "4", name: 'banana' },
      { id: "5", name: 'pineapple' },
      { id: "6", name: 'carrot' },
      { id: "7", name: 'lettuce' },
      { id: "8", name: 'feta' }
    ]
  }),

  actions: {
    addIngredients(ingredient: Ingredient) {
      this.ingredients.push(ingredient)
    },
  },

  getters: {
    get: (state) => (): Ingredient[] => { 
      return state.ingredients
    }
  }
})
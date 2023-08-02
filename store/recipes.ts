import { defineStore } from 'pinia'
import { Recipe } from '@/types'

export interface RecipesState {
  recipes: Recipe[]
}

export const useRecipesStore = defineStore('recipes', {

  state: (): RecipesState => ({
    recipes: [{
      id: "1",
      name: 'Fruit Salad',
      ingredients: [{
        id: "1",
        name: 'apple',
      },
      {
        id: "5",
        name: 'pineapple',
      },
      {
        id: "4",
        name: 'banana',
      }]
    },
    {
      id: "2",
      name: 'Garden Salad',
      ingredients: [{
        id: "6",
        name: 'carrot',
      }]
    },
    {
      id: "3",
      name: 'Greek Salad',
      ingredients: [{
        id: "7",
        name: 'lettuce',
      },
      {
        id: "8",
        name: 'feta',
      },
      ]
    },
    {
      id: "4",
      name: 'Holland Salad',
      ingredients: [{
        id: "7",
        name: 'lettuce',
      },
      {
        id: "6",
        name: 'carrot',
      }]
    },]
  }),

  actions: {
    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe)
    },
  },

  getters: {
    get: (state) => (): Recipe[] => { 
      return state.recipes
    }
  }
})
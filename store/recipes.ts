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
      isFavorite: false,
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
      isFavorite: false,
      ingredients: [{
        id: "6",
        name: 'carrot',
      }]
    },
    {
      id: "3",
      name: 'Greek Salad',
      isFavorite: false,
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
      isFavorite: true,
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
    create(recipe: Recipe) {
      this.recipes.unshift(recipe)
    },
  },

  getters: {
    list: (state) => (): Recipe[] => { 
      return state.recipes
    },
    get: (state) => (id: string): Recipe | undefined => { 
      return state.recipes.find(recipe => recipe.id === id)
    },
    count: (state) => (): number => { 
      return state.recipes.length
    },
    listFavorite: (state) => (): Recipe[] => { 
      return state.recipes.filter(recipe => recipe.isFavorite)
    },
    favoriteCount: (state) => (): number => { 
      return state.recipes.filter(recipe => recipe.isFavorite).length
    },
  }
})
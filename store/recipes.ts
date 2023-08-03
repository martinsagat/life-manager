import { defineStore } from 'pinia'
import { Recipe } from '@/types'
import { recipes as fakeData } from '@/data/data'

export interface RecipesState {
  recipes: Recipe[]
}

export const useRecipesStore = defineStore('recipes', {

  state: (): RecipesState => ({
    recipes: []
  }),

  actions: {
    create(recipe: Recipe) {
      this.recipes.unshift(recipe)
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    },
    async fetch() {
      return new Promise<Recipe[]>((resolve) => {

        const recipesFromLocalStorage = localStorage.getItem('recipes');

        if (recipesFromLocalStorage !== null) {

          // If recipes exist in local storage, use them
          this.recipes = JSON.parse(recipesFromLocalStorage);
          return resolve(this.recipes);

        } else {

          return setTimeout(() => {
            
            const recipes = fakeData;
            this.recipes = recipes;

            // Save the fetched recipes to local storage for future use
            localStorage.setItem('recipes', JSON.stringify(recipes));
            resolve(recipes);
          }, 1000);
        }
      });
    },
  },
    getters: {
      list: (state: RecipesState) => (): Recipe[] => {
        return state.recipes
      },
      get: (state: RecipesState) => (id: string): Recipe | undefined => {
        return state.recipes.find(recipe => recipe.id === id)
      },
      count: (state: RecipesState) => (): number => {
        return state.recipes.length
      },
      listFavorite: (state: RecipesState) => (): Recipe[] => {
        return state.recipes.filter(recipe => recipe.isFavorite)
      },
      favoriteCount: (state: RecipesState) => (): number => {
        return state.recipes.filter(recipe => recipe.isFavorite).length
      },
    }
})
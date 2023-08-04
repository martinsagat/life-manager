import { defineStore } from 'pinia'
import { MealType, PlanedMeal } from '@/types/PlanedMeal';


export interface DiningScheduleState {
  scheduledMeals: PlanedMeal[]
}

export const useDiningScheduleStore = defineStore('dining-schedule', {

  state: (): DiningScheduleState => ({
    scheduledMeals: []
  }),

  actions: {
    addMeal(planedMeal: PlanedMeal) {
      this.scheduledMeals.unshift(planedMeal);
      localStorage.setItem('scheduledMeals', JSON.stringify(this.scheduledMeals));
    },
    removeMeal(meal: PlanedMeal) {
        const index = this.scheduledMeals.indexOf(meal);
        this.scheduledMeals.splice(index, 1);
    },
    fetch() { 
          const scheduledMealsFromLocalStorage = localStorage.getItem('scheduledMeals');
  
          if (scheduledMealsFromLocalStorage !== null) {
            const scheduledMeals = JSON.parse(scheduledMealsFromLocalStorage);
            // convert dates back to Date objects
            scheduledMeals.forEach((meal: PlanedMeal) => {
              meal.date = new Date(meal.date);
            });
            this.scheduledMeals = scheduledMeals;
          } 
    }
  },

  getters: {
    meals: (state) => (): PlanedMeal[] => {
      return state.scheduledMeals;
    },
    scheduledBreakfasts: (state) => (): PlanedMeal[] => {
      const filteredBreakfasts = state.scheduledMeals.filter(meal => meal.type === MealType.Breakfast);
      return filteredBreakfasts.length === 0 ? [] : filteredBreakfasts;
    },
    scheduledLunches: (state) => (): PlanedMeal[] => { 
      const filteredLunches = state.scheduledMeals.filter(meal => meal.type === MealType.Lunch);
      return filteredLunches.length === 0 ? [] : filteredLunches;
    },
    scheduledDinners: (state) => (): PlanedMeal[] => { 
      const filteredDinners = state.scheduledMeals.filter(meal => meal.type === MealType.Dinner);
      return filteredDinners.length === 0 ? [] : filteredDinners;
    }
  }
})
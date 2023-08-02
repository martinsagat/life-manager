import { defineStore } from 'pinia'


export interface ApplicationState {
  darkMode: boolean,
}

export const useApplicationStore = defineStore('application', {

  state: (): ApplicationState => ({
    darkMode: localStorage.getItem('darkMode') === 'true',
  }),

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', String(this.darkMode));
    },
  },

  getters: {
    isDarkMode: (state) => (): boolean => {
      return state.darkMode;
    },
  }
  
})
import { defineStore } from 'pinia'

export interface ApplicationState {
  darkMode: boolean,
  loading: boolean,
}

export const useApplicationStore = defineStore('application', {

  state: (): ApplicationState => ({
    darkMode: localStorage.getItem('darkMode') === 'true',
    loading: false,
  }),

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', String(this.darkMode));
    },
    setLoading(loading: boolean) { 
      this.loading = loading;
    }
  },

  getters: {
    isDarkMode: (state) => (): boolean => {
      return state.darkMode;
    },
    isLoading: (state) => (): boolean => { 
      return state.loading;
    }
  }
  
})
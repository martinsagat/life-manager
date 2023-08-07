<script setup>
import { useApplicationStore } from '@/store/application'
import { useTheme } from 'vuetify'

const store = useApplicationStore()
const darkMode = ref(store.darkMode)
const theme = useTheme()
      
const toggleDarkMode = () => {
    store.toggleDarkMode()
    theme.global.name.value = darkMode.value ? 'dark' : 'light'
}

const clearLocalStorage = () => {
    const isDarkMode = localStorage.getItem('darkMode')
    localStorage.clear()
    location.reload()
    localStorage.setItem('darkMode', isDarkMode)
}

</script>
<template>
  <HomeLayout>
    <!-- Slot for Menu -->
    <template v-slot:menu>
      <Menu />
    </template>
  
    <!-- Slot for Content -->
    <template v-slot:content>
      <v-container class="pa-0 rounded-lg">
          <v-row>
            <v-col cols="12">
              <h1>Settings</h1>
            </v-col>
            <v-col cols="12">
                <v-switch
                  @change="toggleDarkMode"
                    v-model="darkMode"
                  label="Dark Mode"
                 ></v-switch>
           </v-col>
           <v-col class="text-red">
            <p class="mb-4 d-flex align-center">
              <v-icon class="mr-2">mdi-alert mr-1</v-icon>
              Danger Zone
            </p>
            <v-divider />
           </v-col>
           <v-col cols="12">
                <v-btn variant="outlined" class="text-none text-red" @click="clearLocalStorage">Clear Storage</v-btn>
           </v-col>
          </v-row>
        </v-container>
    </template>
  </HomeLayout>
  </template>
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

</script>
<template>
  <HomeLayout>
    <!-- Slot for Menu -->
    <template v-slot:menu>
      <Menu />
    </template>
  
    <!-- Slot for Content -->
    <template v-slot:content>
      <v-container class="bg- rounded-lg">
          <v-row>
            <v-col cols="12">
                <v-switch
                  @change="toggleDarkMode"
                    v-model="darkMode"
                  label="Dark Mode"
                 ></v-switch>
           </v-col>
          </v-row>
        </v-container>
    </template>
  </HomeLayout>
  </template>
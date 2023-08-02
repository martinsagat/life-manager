<script setup>
import { useRecipesStore } from '@/store/recipes'
const store = useRecipesStore()
const recipesCount = store.count()


</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="2">
        <Menu />
      </v-col>
      <v-col col="12" lg="10">
        <v-container class="bg-grey-lighten-4 rounded-lg">
          <v-row>
            <v-col cols="12">
              <h1>Dashboard</h1>      
            </v-col>
            <v-col cols="3">
              <v-card class="pa-5 text-center">
                <h3 class="pb-2">Recipes</h3>
                <p>{{ recipesCount }}</p>
              </v-card>
          
           </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  
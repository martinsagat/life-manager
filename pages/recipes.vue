<script setup>
import { useRecipesStore } from '@/store/recipes'
const store = useRecipesStore()
const recipes = store.get()


</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="2">
        <Menu />
      </v-col>
      <v-col col="12" lg="10">
        <v-container class="bg-grey-darken-2 rounded-lg">
          <v-row>
            <v-col cols="12">
              <v-btn class="float-right"><v-icon>mdi-plus</v-icon></v-btn>
              <h1 class="text-h4">Recipes</h1>
             
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="recipe in recipes" :key="recipe.id">
              <Recipe class="fill-height" :recipe="recipe" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  
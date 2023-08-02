<script setup>
import { useRecipesStore } from '@/store/recipes'
const store = useRecipesStore()
const recipes = store.list()
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="2">
        <Menu />
      </v-col>
      <v-col col="12" lg="10">
        <v-container class="rounded-lg">
          <v-row>
            <v-col cols="12">
              <v-btn class="float-right"><v-icon>mdi-plus</v-icon></v-btn>
              <h1>Recipes ({{ recipes.length }})</h1>
             
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="recipe in recipes" :key="recipe.id">
              <RecipeCard class="fill-height" :recipe="recipe" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  
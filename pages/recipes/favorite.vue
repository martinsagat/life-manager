<script setup>
    import { useRecipesStore } from '@/store/recipes'
    const store = useRecipesStore()
    const favoriteRecipes = computed(() => store.listFavorite())
</script>


<template>
    <HomeLayout>
      <!-- Slot for Menu -->
      <template v-slot:menu>
        <Menu />
      </template>
    
      <!-- Slot for Content -->
      <template v-slot:content>
        <v-container class="rounded-lg pa-0">
        <v-row>
          <v-col cols="12">
            <h1>Favorite Recipes</h1>
          </v-col>
          <v-col cols="12" sm="6" md="4" v-for="recipe in favoriteRecipes" :key="recipe.id">
            <RecipeCard class="fill-height" :recipe="recipe" />
          </v-col>
        </v-row>
      </v-container>
      </template>
    </HomeLayout>
    </template>
  
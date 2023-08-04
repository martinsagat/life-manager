<script setup>
import { useRecipesStore } from '@/store/recipes'
const store = useRecipesStore()
const recipes = computed(() => store.list())
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
            <RecipeDialog />
            <h1>Plan</h1>
          </v-col>
          <v-col cols="12">
            <DiningTab />
          </v-col>
          <v-col cols="12" sm="6" md="4" v-for="recipe in recipes" :key="recipe.id">
            <RecipeCard class="fill-height" :recipe="recipe" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </HomeLayout>
</template>

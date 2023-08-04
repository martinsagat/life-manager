<script setup>
import { useRecipesStore } from '@/store/recipes'
const store = useRecipesStore()
const route = useRoute()
const recipe = store.get(route.params.id)
</script>

<template>
    <v-container>
        <v-btn to="/dining/recipes">Back</v-btn>
        <h1 class="py-4">{{ recipe.name }}</h1>
         <v-list class="rounded-lg">
            <v-list-item>
                <h2>Ingredients</h2>
            </v-list-item> 
            <v-list-item prepend-icon="mdi-food" v-for="ingredient in recipe.ingredients" :key="ingredient.id">
            {{ ingredient.name }}
            </v-list-item>
        </v-list>
    </v-container>
</template>
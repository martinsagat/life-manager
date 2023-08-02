<script setup lang="ts">
import { Recipe } from 'types';

defineProps({
    recipe: {
        type: Object as PropType<Recipe>,
        required: true
    }
})
</script>

<template>
    <v-card
        class="mx-auto text-capitalize rounded-lg"
        :to="`/recipes/${recipe.id}`"
        >
        <template v-slot:title>
            {{ recipe.name }}
        </template>

        <v-card-text>
            <v-list density="compact">
                <v-list-item class="text-capitalize" prepend-icon="mdi-food" v-for="ingredient in recipe.ingredients" :key="recipe.id">
                    {{ ingredient.name }}
                </v-list-item>
            </v-list>
            
        </v-card-text>
    </v-card>
</template>
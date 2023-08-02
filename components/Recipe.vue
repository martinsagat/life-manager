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
        class="mx-auto"
        
        >
        <template v-slot:title>
            {{ recipe.name }}
        </template>

        <v-card-text>
            {{recipe.ingredients}}
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">
import { useRecipesStore } from '@/store/recipes';
const store = useRecipesStore();
const recipesCount = ref(store.count());
const favoriteRecipesCount = ref(store.favoriteCount());


const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
  { title: 'Recipes', icon: 'mdi-noodles', to: '/recipes' },
  { title: 'Favorite', icon: 'mdi-star', to: '/recipes/favorite' },
  { title: 'Setting', icon: 'mdi-cog', to: '/setting' },
]

</script>

<template>
  
  <v-list color="blue" class="rounded-lg fill-height">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" link :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}
              {{ item.title === 'Recipes' ? `(${recipesCount})` : '' }}
              {{ item.title === 'Favorite' ? `(${favoriteRecipesCount})` : '' }}
            </v-list-item-title>
        </v-list-item>
    </v-list>
</template>
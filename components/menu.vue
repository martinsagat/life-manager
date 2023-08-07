<script setup lang="ts">
import { useRecipesStore } from '@/store/recipes';
import { useDisplay } from 'vuetify'

const store = useRecipesStore();
const recipesCount = computed(() => store.list().length);
const favoriteRecipesCount = computed(() => store.listFavorite().length);

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
  { title: 'Dining', icon: 'mdi-noodles', to: '/dining/recipes' },
  { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
]

const display = useDisplay()
const isScreenLgOrBigger = computed(() => {
  return display.lgAndUp.value
})

</script>

<template>
  <v-list color="blue" class="rounded-lg fill-height" v-if="isScreenLgOrBigger">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" link :prepend-icon="item.icon" exact>
            <v-list-item-title>{{ item.title }}
              {{ item.title === 'Recipes' ? `(${recipesCount})` : '' }}
              {{ item.title === 'Favorite' ? `(${favoriteRecipesCount})` : '' }}
            </v-list-item-title>
        </v-list-item>
    </v-list>
</template>
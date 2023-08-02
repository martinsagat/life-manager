<script setup lang="ts">

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
  { title: 'Recipes', icon: 'mdi-noodles', to: '/recipes' },
  { title: 'Admin', icon: 'mdi-typewriter', to: '/admin' },
]

</script>

<template>
  
  <v-list color="blue" class="rounded-lg" bg-color="grey-lighten-4">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" link :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>
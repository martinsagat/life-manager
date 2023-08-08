<script setup>
import { useDisplay } from 'vuetify'
const display = useDisplay()

const isScreenLgOrBigger = computed(() => {
  return display.lgAndUp.value
})

const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Plan', icon: 'mdi-noodles', to: '/dining/recipes' },
  { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
]
</script>

<template>
    <v-app>
        <v-toolbar color="blue">
  <v-toolbar-title class="font-weight-bold" text="Meal Planner" />
  <v-spacer />
<v-toolbar-items>
    <v-btn variant="plain" to="/">Home</v-btn>
    <v-btn variant="plain" to="/about">About</v-btn>
  </v-toolbar-items>
</v-toolbar>
        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
        <v-bottom-navigation v-if="!isScreenLgOrBigger">
            <v-btn :to="item.to" v-for="item in menuItems" :key="item.title">
                <v-icon>{{ item.icon }}</v-icon>
                <span>{{ item.title }}</span>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>
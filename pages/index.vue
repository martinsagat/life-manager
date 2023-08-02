<script setup>
import { useRecipesStore } from '@/store/recipes'
const store = useRecipesStore()
const recipesCount = store.count()


</script>

<template>
<HomeLayout>
  <!-- Slot for Menu -->
  <template v-slot:menu>
    <Menu />
  </template>

  <!-- Slot for Content -->
  <template v-slot:content>
    <v-container class="bg- rounded-lg">
          <v-row>
            <v-col cols="12">
              <h1>Dashboard</h1>      
            </v-col>
            <v-col cols="3">
              <v-card class="pa-5 text-center">
                <h3 class="pb-2">Recipes</h3>
                <p>{{ recipesCount }}</p>
              </v-card>
          
           </v-col>
          </v-row>
        </v-container>
  </template>
</HomeLayout>
</template>
  
  
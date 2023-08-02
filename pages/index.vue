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
    <v-container class="rounded-lg pa-0">
          <v-row>
            <v-col cols="12">
              <h1>Dashboard</h1>      
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card class="pa-10 text-center rounded-lg">
                <h3 class="pb-2">Recipes</h3>
                <p class="text-2xl">{{ recipesCount }}</p>
              </v-card>
          
           </v-col>
          </v-row>
        </v-container>
  </template>
</HomeLayout>
</template>
  
  
<script setup>
import { useRecipesStore } from '@/store/recipes'
const store = useRecipesStore()
const recipes = computed(() => store.list())
const recipesCount = computed(() => store.list().length)
let tab = ref(1)
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
            <h1>Dining</h1>
          </v-col>
          <v-col cols="12">
            <v-tabs
                v-model="tab"
                align-tabs="center">   
                <v-tab class="text-none" :value="1">Meal Plan</v-tab>
                <v-tab class="text-none" :value="2">My Recipes ({{ recipesCount }})</v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12">
            <v-window v-model="tab">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12">
                    <v-sheet height="600" class="align-center justify-center d-flex rounded-lg">
                      Planning Meals
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" sm="6" md="4" v-for="recipe in recipes" :key="recipe.id">
                    <RecipeCard class="fill-height" :recipe="recipe" />
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-col>

        




        </v-row>
      </v-container>
    </template>
  </HomeLayout>
</template>

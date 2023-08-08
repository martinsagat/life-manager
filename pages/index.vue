<script setup>
import { useRecipesStore } from '@/store/recipes'
import { useDiningScheduleStore } from '@/store/diningSchedule'

const recipeStore = useRecipesStore()
const scheduleStore = useDiningScheduleStore()

const recipesCount = computed(() => recipeStore.list().length)

const todayPlanedRecipes = computed(() => {
  return scheduleStore.meals().filter((item) => {
    const date = new Date(item.date).toISOString().slice(0, 10);
    return date === new Date().toISOString().slice(0, 10)
  }).sort((mealA, mealB) => {
    const mealTypeOrder = { breakfast: 1, lunch: 2, dinner: 3 };
    const typeA = mealA.type.toLowerCase();
    const typeB = mealB.type.toLowerCase();
    return mealTypeOrder[typeA] - mealTypeOrder[typeB];
  });
})

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
              <h1>Home</h1>      
            </v-col>
            <v-col cols="12">
              <v-card v-if="todayPlanedRecipes.length > 0" class="pa-10 rounded-lg">
                <h3 class="pb-2">Today's meals</h3>
                 <v-card class="text-caption mb-2 bg-secondary rounded-lg" v-for="meal in todayPlanedRecipes" :key="meal.id">
                  <!-- <v-card-title>{{ meal.type }}</v-card-title> -->
                  <v-img  class="align-end text-white" height="100px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover :src="meal.recipe.img">
                    <v-card-title class="text-white" v-text="meal.recipe.name"></v-card-title>
                  </v-img>
                 </v-card>
              </v-card>
              <v-card v-else class="pa-10 rounded-lg">
                <div class="text-center">
                  <v-img src="/hungry.png" width="200" class="mx-auto" />
                  <h4>No meals planned for today</h4>
                  <v-btn to="/dining/recipes" class="mt-5 text-none">Plan Meals</v-btn>
                </div>
              </v-card>
           </v-col>
           <v-col cols="12">
              <v-card class="pa-10 rounded-lg h-100">
                <h3 class="pb-2">Recipes</h3>

                  Saved ({{ recipesCount }})

              </v-card>
           </v-col>
          </v-row>
        </v-container>
  </template>

<RecipeDialog />
</HomeLayout>
</template>
  
  
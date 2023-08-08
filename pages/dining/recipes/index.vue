<script setup>
import { useRecipesStore } from '@/store/recipes'
import { useDisplay } from 'vuetify'
const store = useRecipesStore()
const recipes = computed(() => store.list())
const recipesCount = computed(() => store.list().length)
let tab = ref(1)

const display = useDisplay()


const isScreenMdOrBigger = computed(() => {
  return display.mdAndUp.value
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
            <RecipeDialog />
            <h1>Plan</h1>
          </v-col>
          <v-col cols="12">
            <v-tabs
                v-model="tab"
                align-tabs="center">   
                <v-tab class="text-none" :value="1">Calendar</v-tab>
                <v-tab class="text-none" :value="2">Recipes ({{ recipesCount }})</v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12">
            <v-window v-model="tab">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12">
                    <Calendar class="rounded-lg" v-if="isScreenMdOrBigger" />
                    <div class="text-center" v-else>
                      Calendar for small screen not implemented<br>
                      <i>(Increase screen size)</i>
                    </div>
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

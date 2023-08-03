<script setup lang="ts">
import { useRecipesStore } from '@/store/recipes'
import { useIngredientsStore } from '@/store/ingredients';
const recipesStore = useRecipesStore()
const ingredientsStore = useIngredientsStore()

const dialog = ref(false)
const recipe = ref({
  id: '',
  name: '',
  ingredients: [],
})

const ingredients = ref(ingredientsStore.get())


const onSave = () => {
  const newRecipe = { ...recipe.value };
  newRecipe.id = Math.random().toString(36).substring(2, 9)
  recipesStore.create(newRecipe)
    dialog.value = false
    recipe.value = {
        id: '',
        name: '',
        ingredients: [],
    }
}

</script>

<template>
      <v-dialog
        v-model="dialog"
        persistent
        width="1024"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            class="float-right"
            v-bind="props"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">New Recipe</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="recipe.name"
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-autocomplete
                    chips
                    v-model="recipe.ingredients"
                    :items="ingredients"
                    item-text="name"
                    item-value="id"
                    item-title="name"
                    label="Ingredients"
                    multiple
                    required
                    return-object
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              @click="onSave"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </template>

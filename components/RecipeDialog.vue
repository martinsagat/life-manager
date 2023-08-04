<script setup lang="ts">
import { useRecipesStore } from '@/store/recipes'
import { useIngredientsStore } from '@/store/ingredients';
import { useField, useForm } from 'vee-validate'
import { Ingredient, Recipe } from 'types';

const recipesStore = useRecipesStore()
const ingredientsStore = useIngredientsStore()

const formRef = ref<any>(null);
const dialog = ref(false)

const availableIngredients = ref<Ingredient[]>(ingredientsStore.get())

const { handleSubmit, resetForm } = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    ingredients(value: any) {
      if (value && value.length > 0) return true
      return 'Select at least one ingredient.'
    }
    }
  })

const name = useField('name')
const ingredients: any = useField('ingredients')

const submit = handleSubmit(values => {
  const recipe: Recipe = {
    id: Math.random().toString(36).substring(2, 9),
    name: values.name,
    ingredients: values.ingredients,
    isFavorite: false,
  }
  recipesStore.create(recipe)
  resetForm()
  dialog.value = false
})
</script>

<template>
      <v-dialog
        v-model="dialog"
        persistent
        width="800"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            class="float-right"
            v-bind="props"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card class="rounded-lg">
          <v-form ref="formRef" @submit.prevent="submit" >
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
                    v-model="name.value.value"
                    :error-messages="name.errorMessage.value"
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
                    v-model="ingredients.value.value"
                    :error-messages="ingredients.errorMessage.value"
                    :items="availableIngredients"
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
              type="submit"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
        </v-card>
      </v-dialog>
  </template>

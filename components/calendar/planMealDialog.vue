<script setup lang="ts">
import { useDiningScheduleStore } from '@/store/diningSchedule'
import { useRecipesStore } from '@/store/recipes'
import { MealType } from '@/types/PlanedMeal'
import { useField, useForm } from 'vee-validate'

const diningScheduleStore = useDiningScheduleStore()
const recipesStore = useRecipesStore()

const dialog = ref(false)
const formRef = ref<any>(null)

const recipe: any = useField('recipe')

const recipes = computed(() => recipesStore.recipes)


const { handleSubmit } = useForm({
  validationSchema: {
  
    }
  })

const submit = handleSubmit(() => {

    const planedMeal = Object.assign({}, {
        id: Math.random().toString(36).substring(2, 9),
        date: props.date,
        type: props.mealType,
        recipe: recipe.value.value
    });
      
    diningScheduleStore.addMeal(planedMeal)

    dialog.value = false
})
    


const props = defineProps({
  date: {
    type: Date,
    required: true
  },
  mealType: {
    type: String as PropType<MealType>,
    required: true
  }
})

</script>

<template>
      <v-dialog
        v-model="dialog"
        persistent
        width="800"
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="h-100 rounded-lg" style="min-height: 75px; min-width: 75px;">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card class="rounded-lg">
          <v-form ref="formRef" @submit.prevent="submit" >
          <v-card-title>
            <span class="text-h5">
                {{ date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }) }} ({{ mealType }})
            </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                
                <v-col
                  cols="12"
                >
    
                <v-autocomplete
                    v-model="recipe.value.value"
                    :items="recipes"
                    item-text="name"
                    item-value="id"
                    item-title="name"
                    label="Recipe"
                    required
                    return-object
                  />

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

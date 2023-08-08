<script setup lang="ts">
import { PlanedMeal } from '@/types/PlanedMeal';

defineProps({
  planedMeal: {
    type: Object as PropType<PlanedMeal>,
    required: true
  },
})
</script>
<template>
    <v-card class="calendar-item rounded-lg bg-grey-darken-2 d-flex flex-1-1-100 pa-0 h-100 justify-center align-center">   
          <v-img height="80px" :src="planedMeal.recipe.img" cover >
          </v-img>
    </v-card>
</template>

<style scoped>
.calendar-item {
    min-height: 80px;
}

.calendar-item:hover {
    cursor: pointer;
    background-color: gray !important;
}
</style>
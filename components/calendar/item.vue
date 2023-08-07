<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>
<template>
    <v-container class="calendar-item rounded-lg bg-grey-darken-2 d-flex flex-1-1-100 pa-2 h-100 justify-center align-center">
      <v-row>
        <v-col>
          {{ title }}
        </v-col>
      </v-row>
       
    </v-container>
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
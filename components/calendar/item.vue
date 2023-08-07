<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>
<template>
    <div class="calendar-item rounded-lg bg-grey-darken-2 d-flex flex-1-1-100 pa-2 h-100 justify-center align-center">
       {{ title }}
    </div>
</template>

<style scoped>
.calendar-item {
    min-height: 80px;
}
</style>
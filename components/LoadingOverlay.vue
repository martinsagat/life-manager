<script setup lang="ts">
import { useApplicationStore } from '@/store/application'
const applicationStore = useApplicationStore()
const isLoading = computed(() => applicationStore.isLoading())
</script>

<template>
<v-overlay
v-model="isLoading"
class="align-center justify-center"
>
<v-progress-circular
    indeterminate
    size="64"
></v-progress-circular>
</v-overlay>
</template>
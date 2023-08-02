<script setup>

  import { useApplicationStore } from '@/store/application'
  import { useTheme } from 'vuetify'

  const store = useApplicationStore()
  const darkMode = ref(store.darkMode)
  const theme = useTheme()

  theme.global.name.value = darkMode.value ? 'dark' : 'light'

</script>

<template>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>

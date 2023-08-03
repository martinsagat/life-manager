<script setup>

  import { useApplicationStore } from '@/store/application'
  import { useRecipesStore } from '@/store/recipes'
  import { useTheme } from 'vuetify'

  const applicationStore = useApplicationStore()
  const recipesStore = useRecipesStore()
  
  const darkMode = ref(applicationStore.darkMode)
  const theme = useTheme()

  theme.global.name.value = darkMode.value ? 'dark' : 'light'
  
  
onMounted(async () => {
  try {
    applicationStore.setLoading(true);
    await recipesStore.fetch();
    applicationStore.setLoading(false);
  } catch (error) {
    // Handle the error here (e.g., display an error message)
    console.error("Error fetching recipes:", error);
    applicationStore.setLoading(false);
  }
});

</script>

<template>
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <LoadingOverlay />
    </div>
  </NuxtLayout>

</template>

<template>
  <HomeLayout>
    <!-- Slot for Menu -->
    <template v-slot:menu>
      <Menu />
    </template>
  
    <!-- Slot for Content -->
    <template v-slot:content>
      <v-sheet min-height="600" color="rounded-lg d-flex justify-center align-center">
        Admin
      </v-sheet>
    </template>
  </HomeLayout>
  </template>

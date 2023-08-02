<!-- HomeLayout.vue -->
<template>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3">
          <slot name="menu"></slot>
        </v-col>
        <v-col col="12" lg="9">
          <slot name="content"></slot>
        </v-col>
      </v-row>
    </v-container>
  </template>
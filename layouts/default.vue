<template>
    <v-app>
        <v-toolbar color="blue">
  <v-toolbar-title class="font-weight-bold" text="Personal Manager" />
  <v-spacer />
<v-toolbar-items>
    <v-btn variant="plain" to="/">Home</v-btn>
    <v-btn variant="plain" to="/about">About</v-btn>
  </v-toolbar-items>
</v-toolbar>
        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
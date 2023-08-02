<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title text="Life Manager" />
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
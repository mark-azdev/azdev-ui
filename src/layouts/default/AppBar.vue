<template>
    <v-app-bar color="success" :elevation="12" collapse-on-scroll>
        <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>
        <v-toolbar-title align="center">
            .Net Developer
        </v-toolbar-title>

        <!-- <template v-slot:append>
            <v-btn icon="mdi-email"></v-btn>
            <v-btn icon="mdi-phone"></v-btn>
            <v-btn icon="mdi-map-marker"></v-btn>
            <v-btn icon="mdi-linkedin"></v-btn>
            <v-btn icon="mdi-github"></v-btn>
            <v-btn @click="toggleTheme" text>Toggle Theme</v-btn>
            <v-btn :to="{ name: 'Login' }">Login</v-btn>
        </template> -->
    </v-app-bar>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useTheme, type ThemeInstance } from "vuetify";

const theme : ThemeInstance = useTheme();
const darkMode = ref<boolean>(false);

const toggleTheme = () => {
    darkMode.value = !darkMode.value
    theme.global.name.value = darkMode.value ? "light" : "dark";
};

</script>
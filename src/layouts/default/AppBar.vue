<template>
    <v-app-bar :elevation="12" collapse-on-scroll color="surface" flat density="default">
            <v-app-bar-nav-icon v-if="display.mdAndDown.value" variant="text"
                @click.stop="UpdateDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title :class="display.lgAndUp.value ? 'text-center' : 'text-left'"
                class="text-uppercase">
                <template v-slot:text>
                    <span v-for="tag, index in title.split('/')" :class="GetHeaderClass(index + 1)" class="px-4">
                        {{ tag }}
                    </span>
                </template>
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
import { useTheme, type DisplayInstance, type ThemeInstance, useDisplay } from "vuetify";

const props = defineProps({
    drawer: { type: Boolean, required: true },
    display: { type: Object, required: true }
})

const emit = defineEmits(["UpdateDrawer"])

function UpdateDrawer() {
    emit("UpdateDrawer")
}

const theme : ThemeInstance = useTheme();
const darkMode = ref<boolean>(false);

const toggleTheme = () => {
    darkMode.value = !darkMode.value
    theme.global.name.value = darkMode.value ? "light" : "dark";
};

const title = props.display.lgAndUp.value ? 
    ".Net Developer / Azure Engineer / Front End Handyman" : "Full-stack Developer";

function GetHeaderClass(index: number) {
    if(index / 1 === 1) return "text-lime-accent-3"
    if(index / 2 === 1) return "text-cyan-accent-3"
    if(index / 3 === 1) return "text-teal-accent-3"
}

</script>
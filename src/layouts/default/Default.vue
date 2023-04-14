<template>
    <v-app>
        <v-app-bar :elevation="12" collapse-on-scroll color="surface">
            <v-app-bar-nav-icon v-if="display.mdAndDown.value" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title :text="title" :class="display.lgAndUp.value ? 'text-center':'text-left'">
                
            </v-toolbar-title>

            <template v-slot:append>

                <!-- <v-btn @click="true" text>Toggle Theme</v-btn>
            <v-btn :to="{ name: 'Login' }">Login</v-btn> -->
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" :expand-on-hover="display.lgAndUp.value" :rail="display.lgAndUp.value">
            <v-list>
                <v-list-item prepend-icon="mdi-face-man" title="Mark Brown"
                    to=""></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-face-man-profile" title="Profile" value="profile"
                    :to="{ name: 'Profile' }"></v-list-item>
                <v-list-item prepend-icon="mdi-briefcase" title="Experience" value="experience"
                    :to="{ name: 'Experience' }"></v-list-item>
                <v-list-item prepend-icon="mdi-information" title="Info" value="information"
                    :to="{ name: 'Information' }"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <RouterView />
        </v-main>
        <v-footer absolute inset app height="60">
            <v-row justify="center" no-gutters height="5px">
                <v-btn icon="mdi-email" class="mx-2" href="mailto: mark@azdev.space"></v-btn>
                <v-btn icon="mdi-map-marker" class="mx-2" href="https://goo.gl/maps/WdHpeYmFGsNZNuww8" target="_blank"></v-btn>
                <v-btn icon="mdi-linkedin" class="mx-2" href="https://www.linkedin.com/in/azdev-space/" target="_blank"></v-btn>
                <v-btn icon="mdi-github" class="mx-2" disabled></v-btn>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">

import { ref, computed } from "vue"
import { useDisplay } from "vuetify"

const display = useDisplay()

const title = computed((): string => display.lgAndUp.value ? ".Net Developer / Azure Engineer / Front End Handyman" : "Full-stack Developer")

const drawer = ref(display.lgAndUp ? true : false)

</script>
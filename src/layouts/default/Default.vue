<template>
    <v-app>
        <AppBar @UpdateDrawer="OnUpdateDrawer" :drawer="obj.drawer" :display="display"></AppBar>
        <Navigation :drawer="GetDrawer()" :display="display"></Navigation>
        <v-main>
            <RouterView />
        </v-main>
        <v-footer absolute inset app>
            <v-row justify="center" no-gutters>
                <v-btn size="x-small" color="lime-accent-2" icon="mdi-email" class="mx-2" href="mailto: mark@azdev.space">
                    <v-icon icon="mdi-email" size="x-large"></v-icon>
                </v-btn>
                <v-btn size="x-small" color="lime-accent-1" icon="mdi-map-marker" class="mx-2"
                    href="https://goo.gl/maps/WdHpeYmFGsNZNuww8" target="_blank">
                    <v-icon icon="mdi-map-marker" size="x-large"></v-icon>
                </v-btn>
                <v-btn size="x-small" color="cyan-accent-1" icon="mdi-linkedin" class="mx-2"
                    href="https://www.linkedin.com/in/azdev-space/" target="_blank">
                    <v-icon icon="mdi-linkedin" size="x-large"></v-icon>
                </v-btn>
                <v-btn size="x-small" color="cyan-accent-2" icon="mdi-github" class="mx-2" disabled>
                    <v-icon icon="mdi-github" size="x-large"></v-icon>
                </v-btn>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">

import { reactive } from "vue"
import { useDisplay } from "vuetify"
import AppBar from "./AppBar.vue"
import Navigation from "./Navigation.vue"

const display = useDisplay()

interface Obj {
    drawer: boolean
}

// just practicing with reactive object instead of ref
// because we are using the script setup I probably wouldn't do this in a real world situation unless
// I find a way to toRefs the reactive object meaning I don't have to use the obect dot property name in the template
const obj: Obj = reactive({
    drawer: display.lgAndUp.value
})

function GetDrawer() {
    return obj.drawer
}

function OnUpdateDrawer() {
    obj.drawer = !obj.drawer
}

</script>
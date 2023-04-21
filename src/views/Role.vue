<template>
    <v-container class="pa-8">
        <v-row class=" d-flex justify-center">
            <v-col>
                <v-sheet border rounded class="pa-4">
                    <blockquote class="blockquote pa-0 mb-2 text-teal-accent-3 text-subtitle-1">
                        While working at
                        <v-btn variant="text" class="text-lime-accent-3 px-0" min-width="0" :href="role.url"
                            target="_blank">
                            {{ role.company }}
                        </v-btn>
                        <v-spacer v-if="display.smAndDown.value"></v-spacer>
                        as a
                        <v-btn variant="text" class="text-cyan-accent-3 px-0" min-width="0">
                            {{ role.position }}
                        </v-btn>
                        <v-spacer v-if="display.smAndDown.value"></v-spacer>
                        I achieved the following:
                    </blockquote>
                    <v-divider></v-divider>
                    <v-list class="pl-0">
                        <v-list-item class="text-teal-accent-3 text-body-2 pa-0" v-for="item in role.achievements">
                            <template v-slot:default>
                                <li>{{ item }}</li>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>

import { useDisplay } from "vuetify"
import { userAuthStore } from "../stores/store"
import { storeToRefs } from 'pinia';

const display = useDisplay()
const store = userAuthStore()
const { role } = storeToRefs(store)

</script>

<style scoped></style>
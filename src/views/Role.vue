<template>
    <v-container class="pa-8">
        <v-row class=" d-flex justify-center">
            <v-col>
                <v-sheet border rounded class="pa-4">
                    <blockquote class="blockquote pa-0 mb-2">
                        While working at {{ role.company }} as a {{ role.position }} I achieved the following:
                    </blockquote>
                    <v-list lines="one">
                        <v-list-item v-for="item in role.achievements" :title="item"></v-list-item>
                    </v-list>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>

import { reactive, onBeforeMount, ref } from 'vue';
import { userAuthStore } from "../stores/store"
import { storeToRefs } from 'pinia';
import { useRoute } from "vue-router"

const store = userAuthStore()
const { id, role } = storeToRefs(store)
const route = useRoute()

console.log(role.value)

</script>

<style scoped></style>
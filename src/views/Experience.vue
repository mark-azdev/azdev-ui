<template>
    <v-container>
        <v-row>
            <v-col xs="1" sm="2" md="3" lg="4" xl="3" v-for="(role, index) in store.roles" :key="index">
                <v-card height="150" ripple :to="{ name: 'Role', params: { id: role.id } }">
                    <v-card-title class="d-flex justify-space-between" prepend-icon="mdi-info">
                        <v-btn variant="text" class="px-0" min-width="0" :href="role.url" target="_blank">
                            {{ role.company }}
                        </v-btn>
                        <v-label :text="role.position"></v-label>

                    </v-card-title>
                    <v-card-subtitle class="d-flex justify-space-between">
                        <v-label>Permanent</v-label>
                        <v-label>{{ role.period }}</v-label>
                    </v-card-subtitle>
                    <v-card-text class="text-center">
                        {{ role.summary }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>

import { onBeforeMount } from 'vue';
import { userAuthStore } from "../stores/store"
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useRoute } from "vue-router"

const store = userAuthStore()
const { id, roles } = storeToRefs(store)

onBeforeMount(async () => {
    store.getRoles()
})

const route = useRoute()

onBeforeRouteLeave(async (to, from) => {
    if (to.name === "Role") id.value = parseInt(to.params.id.toString())
})

</script>
<template>
    <v-container>
        <v-row>
            <v-col xs="1" sm="2" md="3" lg="4" xl="3" v-for="(role, index) in roles" :key="index">
                <v-card ripple variant="outlined" class="rounded-xs">
                    <v-card-title class="d-flex justify-space-between pa-3" prepend-icon="mdi-info">
                        <v-btn variant="outlined" class="rounded px-2 text-lime-accent-4 rounded-0" min-width="0"
                            :href="role.url" target="_blank">
                            {{ role.company }}
                        </v-btn>
                        <v-btn variant="outlined" class="px-2 text-cyan-accent-4"
                            :to="{ name: 'Role', params: { id: role.id } }">
                            {{ role.position }}
                        </v-btn>
                    </v-card-title>
                    <v-card-subtitle class="d-flex justify-space-evenly px-3">
                        <span
                            class="text-black pl-4 pr-4 py-1 bg-lime-accent-3 rounded-s-xl font-weight-bold ma-0">Permanent</span>
                        <v-spacer class="bg-lime-accent-2"></v-spacer>
                        <v-spacer class="bg-lime-accent-1"></v-spacer>
                        <v-spacer class="bg-cyan-accent-1"></v-spacer>
                        <v-spacer class="bg-cyan-accent-2"></v-spacer>
                        <span class="text-black pl-4 pr-4 py-1 bg-cyan-accent-3 rounded-e-xl font-weight-bold ma-0">{{
                            role.period }}</span>
                    </v-card-subtitle>
                    <v-card-text class="text-center text-teal-accent-3 py-2">
                        <v-chip v-for="tag in role.summary.split(',')" variant="outlined" rounded-lg
                            class="ma-1 align-center" size="small">
                            {{ tag }}
                        </v-chip>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts" setup>

import { userAuthStore } from "../stores/store"
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useRoute } from "vue-router"

const store = userAuthStore()
const { id, roles } = storeToRefs(store)

store.getRoles()

const route = useRoute()

onBeforeRouteLeave(async (to, from) => {
    if (to.name === "Role") id.value = parseInt(to.params.id.toString())
})

</script>
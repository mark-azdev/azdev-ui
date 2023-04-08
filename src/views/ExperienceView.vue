<template>
    <v-layout>
        <v-card class="mx-auto mt-5" width="800">
            <v-main>
                <v-card :append-icon="role.icon" v-for="(role, index) in roles" :key="1">
                    <template v-slot:title>
                        <a href="https://www.tredz.co.uk/" target="_blank">
                            {{ role.company }}
                        </a>
                        <v-label>{{ role.position }}</v-label>
                    </template>
                    <v-card-subtitle>
                        <v-label>{{ role.period }}</v-label>
                    </v-card-subtitle>
                    <v-card-text>
                        {{ role.summary }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn v-if="!role.reveal" variant="text" color="teal-accent-4" @click="role.reveal = true">
                            Learn More
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <v-card v-if="role.reveal" class="v-card--reveal" style="height: 100%;">
                            <v-card-text class="pb-0">
                                <!-- <p class="text-h4 text--primary">
                                    Origin
                                </p> -->
                                <p>{{ role.detailedDescription }}</p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                                <v-btn variant="text" color="teal-accent-4" @click="role.reveal = false">
                                    Close
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-expand-transition>
                </v-card>
            </v-main>

        </v-card>
    </v-layout>
</template>

<script lang="ts" setup>

import { reactive, onBeforeMount, ref } from 'vue';
import RoleService from '../services/RoleService'
import type { Role } from "../types/role";

let roles = ref<Role[]>([])

onBeforeMount(async () => {
    RoleService.getRoles()
        .then(response => {
            roles.value = JSON.parse(JSON.stringify(response.data))
        })
}
)

</script>
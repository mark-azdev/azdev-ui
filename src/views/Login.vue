<template>
    <v-form @submit.prevent="login">
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1">Login</h1>
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="username" label="Username" prepend-icon="mdi-account-circle" />
                <v-text-field v-model="password" :type="showPassword ? 'text' : 'password'" label="Password"
                    prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword" />

            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="success" :to="{ name: 'Register' }">Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="info">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script setup lang="ts">

import { ref } from "vue"
import { userAuthStore } from "../stores/store"
import { useRouter, useRoute } from "vue-router"

const showPassword = ref(false)
const username = ref<string>("")
const password = ref<string>("")
  const router = useRouter()
  const route = useRoute()

function login() {
    console.log("in login")
    const user = userAuthStore()
    user.login(username.value, password.value)
    .then(() => router.push({ name: "Experience" }))
}

</script>

<style scoped></style>
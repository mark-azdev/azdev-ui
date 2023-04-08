<template>
    <v-container>
        <v-row class="mx-auto mt-5">
            <v-col>
                <h1>Signup</h1>
                <v-form ref="signUpForm" v-model="formValidity">
                    <v-text-field
                        name="email"
                        label="Email"
                        type="email"
                        v-model="email"
                        :rules="emailRules"
                    />
                    <v-autocomplete
                        label="Which browser do you use?" 
                        :items="browsers"
                    />
                    <v-file-input
                        label="Attach profile picture"
                    />
                    <v-text-field
                        name="dob"
                        label="Date of Birth"
                        type="date"
                        v-model="dob"
                    ></v-text-field>
                    <v-checkbox 
                        label="Agree to terms & conditions" 
                        v-model="agreeToTerms"
                        :rules="agreeToTermsRules"
                        required
                    />
                    <v-btn 
                        class="mr-4" 
                        type="submit" 
                        color="primary"
                        :disabled="!formValidity"
                        >Submit
                    </v-btn>
                    <v-btn class="mr-4" color="success" @click="validateForm">Validate Form</v-btn>
                    <v-btn class="mr-4" color="warning" @click="resetValidation">Reset Validation</v-btn>
                    <v-btn class="mr-4" color="error" @click="resetForm">Reset</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

import { ref } from "vue"

const browsers = ref([
    "Chrome",
    "Firefox",
    "Safari",
    "Edge",
    "Brave"
])

const dob = ref("1975-03-22")

const agreeToTerms = ref(false)

const agreeToTermsRules = [
    (value:boolean) => !!value || "You must agree to the terms and conditions to register for an account"
]

const email = ref("")
const emailRules = [
    (value:string) => !!value || "Email is required.",
    (value:string) => value.indexOf("@") !== 0 || "Email should have a username.",
    (value:string) => value.includes("@") || "Email should include an @ symbol."
]

const signUpForm = ref<any>(null)

function resetValidation() {
    signUpForm.value.resetValidation()
}

function resetForm() {
    signUpForm.value.reset()
}

function validateForm() {
    signUpForm.value.validate()
}

const formValidity = ref(false)

</script>

<style scoped>

</style>
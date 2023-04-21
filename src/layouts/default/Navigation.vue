<template>
    <v-navigation-drawer v-model="texteEnvoye" :expand-on-hover="display.lgAndUp.value" rail :location="display.lgAndUp.value ? 'right' : 'left'">
            <v-list density="default" nav>
                <v-list-item title="Mark Brown" value="profile" :to="{ name: 'Profile' }" class="text-teal-accent-3">
                    <template v-slot:prepend>
                        <v-icon color="lime-accent-3" icon="mdi-face-man-profile"></v-icon>
                    </template>
                </v-list-item>
                <v-divider color="teal-accent-3"></v-divider>
                <v-list-item prepend-icon="mdi-briefcase" title="Experience" value="experience" :to="{ name: 'Experience' }"
                    class="text-cyan-accent-2">
                    <template v-slot:prepend>
                        <v-icon color="cyan-accent-2" icon="mdi-briefcase"></v-icon>
                    </template>
                </v-list-item>
                <v-list-item title="Info" value="information" :to.prevent="{ name: 'Information' }" class="text-lime-accent-1">
                    <template v-slot:prepend>
                        <v-icon color="teal-accent-1" icon="mdi-information"></v-icon>
                    </template>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>

<script setup lang="ts">

import { ref, toRef, watch } from "vue"

const props = defineProps({
    drawer: { type: Boolean, required: true },
    display: { type: Object, required: true }
})

const texteEnvoye = ref();
const texteEnvoyeRo = toRef(props,'drawer'); // react to prop
watch(texteEnvoyeRo, (value) => {
    texteEnvoye.value = texteEnvoyeRo.value; // OK, textEnvoye is yours
});

</script>
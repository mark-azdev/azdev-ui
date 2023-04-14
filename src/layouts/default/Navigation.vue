<template>
    <v-navigation-drawer expand-on-hover rail>
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Mark Brown"
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
</template>
<script setup>

    // const emit = defineEmits(['navigate'])

</script>

<template>
    <v-app-bar height="100" elevation="0">
       
        <v-toolbar-title>
            <v-list-item>
                <template v-slot:prepend>
                    <v-avatar size="50" @click="$emit('navigate', 'home')">
                        <v-img src="me.jpg"></v-img>
                    </v-avatar>
                </template>
                <p class="font-weight-bold text-h5" @click="$emit('navigate', 'home')">Joren Sumagang</p>
            </v-list-item>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="plain" size="large" @click="$emit('navigate', 'home')" :ripple="false" class="me-2"> HOME </v-btn>
        <v-btn variant="plain" size="large" @click="$emit('navigate', 'about')" :ripple="false" class="me-2"> ABOUT </v-btn>
        <v-btn variant="plain" size="large" @click="$emit('navigate', 'projects')" :ripple="false" class="me-2"> PROJECTS </v-btn>
        <v-btn variant="plain" size="large" @click="$emit('navigate', 'contact')" :ripple="false" class="me-2"> CONTACT </v-btn>

    </v-app-bar>
    <router-view></router-view>
</template>

<style scoped>

    .v-btn:hover {
        color: #4CAF50;
    }

    p:hover {
        color: #4CAF50;
        cursor: pointer;
    }

    .v-avatar {
        cursor: pointer;
    }

</style>
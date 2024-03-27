<script setup>

    const emit = defineEmits(['navigate'])
    import { ref } from 'vue'
    
    const show_menu = ref(false)
    const navlinks = [
        'home',
        'about',
        'projects',
        'contact'
    ]

    function close(link) {
        emit('navigate', link)
        show_menu.value = false
    }


</script>

<template>

    <v-app-bar height="100" elevation="0">
       
        <v-toolbar-title>
            <v-list-item>
                <template v-slot:prepend>
                    <v-avatar size="50" @click="$emit('navigate', 'home')">
                        <v-img src="/portfolio/me.jpg"></v-img>
                    </v-avatar>
                </template>
                <p class="font-weight-bold text-h5" @click="$emit('navigate', 'home')">Joren Sumagang</p>
            </v-list-item>
        </v-toolbar-title>

        <template v-slot:append>
            <div v-if="$vuetify.display.smAndDown">
                <v-btn variant="plain" size="large" :ripple="false" @click="show_menu = !show_menu" class="me-2"> 
                    <v-icon size="x-large">mdi-menu</v-icon>
                </v-btn>
            </div>
            <div v-else>
                <v-btn variant="plain" v-for="link in navlinks" :key="link" size="large" @click="$emit('navigate', link)" :ripple="false" class="me-2"> {{ link }} </v-btn>
            </div>
        </template>
        
    </v-app-bar>
    <v-navigation-drawer v-model="show_menu" location="top" temporary>
        <v-list-item @click="close(link)" v-for="link in navlinks" :key="link">
            <v-list-item-title class="py-4 text-uppercase text-end">{{ link }}</v-list-item-title>
        </v-list-item>
    </v-navigation-drawer>
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
<script setup>

import { ref } from 'vue'
defineProps({ project: Object })

const dialog = ref(false)
const show_details = ref(false)

</script>

<template>
    <v-card class="my-10 pb-6">
        <v-card-item>
            <v-tooltip text="Click me to see screenshots" location="top">
                <template v-slot:activator="{ props }">
                    <!-- <v-img height="auto" v-bind="props" :src="project.image[0]" @click="dialog = true">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular
                                color="grey-lighten-4"
                                indeterminate
                                ></v-progress-circular>
                            </div>
                        </template>
                    </v-img> -->
                    <div style="height: 330px; width: 100%;" class="bg-grey-lighten-2">
                        <v-img style="height: 100%; width: 100%;" v-bind="props" :src="project.image[0]" @click="dialog = true">
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="grey-lighten-4"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                    </div>
                </template>
            </v-tooltip>
        </v-card-item>
        <v-card-item>
            <p class="font-weight-bold text-h5 mb-4">{{ project.name }}</p>
            <v-chip label class="mx-2 my-1 pa-5" v-for="tool in project.tools_used" :key="tool">{{ tool }}</v-chip>
            <p class="my-4">
                {{ project.description }}
            </p>
            <v-btn color="green" prepend-icon="mdi-open-in-new" :href="project.link" target="_blank">
                Demo
            </v-btn>
            <v-tooltip text="Github Repository">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" class="ml-4 text-black" flat icon="mdi-github"></v-btn>
                </template>
            </v-tooltip>
        </v-card-item>
    </v-card>
    <v-dialog v-model="dialog">
        <v-row>
            <v-spacer/>
            <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
        </v-row>
        <v-carousel show-arrows="hover" hide-delimiter-background>
            <v-carousel-item
                v-for="image in project.image"
                :key="image"
                :src="image"
            ></v-carousel-item>
            </v-carousel>
    </v-dialog>
</template>

<style scoped>

    .v-img {
        cursor: pointer;
    }

</style>
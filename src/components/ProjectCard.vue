<script setup>

import { ref } from 'vue'
defineProps({ project: Object })

const dialog = ref(false)
const show_details = ref(false)

</script>

<template>
    <v-card color="" class="my-10 py-6">
        <v-row>
            <v-col cols="12" md="6" sm="12" class="d-flex flex-column justify-center">
                <v-card-item>
                    <p class="font-weight-bold text-h5 mb-4">{{ project.name }}</p>
                    <v-chip label class="mx-2 my-1 pa-5" v-for="tool in project.tools_used" :key="tool">{{ tool }}</v-chip>
                    <p class="my-4">
                        {{ project.description }}
                    </p>
                    <v-btn color="green" prepend-icon="mdi-open-in-new" :href="project.link" target="_blank">
                        View Demo
                    </v-btn>
                    <v-btn class="ml-4" color="black" prepend-icon="mdi-github">
                        Github Repo
                    </v-btn>
                </v-card-item>
            </v-col>
            <v-col cols="12" md="6" sm="12">
                <v-tooltip text="Click me to see screenshots" location="top">
                    <template v-slot:activator="{ props }">
                        <v-img height="400" v-bind="props" :src="project.image[0]" @click="dialog = true">
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="grey-lighten-4"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                    </template>
                </v-tooltip>
            </v-col>
            
        </v-row>
        <!-- <v-expand-transition>
            <div v-show="show_details">
                <v-card-title>Project overview</v-card-title>
                <v-card-text>
                    {{ project.overview }}
                </v-card-text>
                <v-card-title>Tools used</v-card-title>
                <v-card-text>
                    <v-chip label class="mx-2 mb-2 pa-5" size="large" v-for="tool in project.tools_used" :key="tool">{{ tool }}</v-chip>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn size="large" color="green" variant="outlined" @click="show_details = false" append-icon="mdi-chevron-up">Show less</v-btn>
                    <v-btn size="large" color="green" variant="flat" :href="project.link" target="_blank">Link</v-btn>
                </v-card-actions>
            </div>
        </v-expand-transition> -->
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
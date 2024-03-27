<script setup></script>

<template>
    <v-container fluid class="bg-black">
        <v-container>
            <v-row>
                <v-col cols="12" sm="8" md="9">
                    <p class="font-weight-bold text-h6 my-6">Joren Sumagang</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br> Veniam deserunt accusamus ullam laboriosam. Quos aspernatur incidunt, dignissimos fugi</p>
                    <v-sheet class="rounded-pill mt-5" color="grey-lighten-5" width="300">
                        <v-list-item title="Superpowers" subtitle="On repeat" href="https://open.spotify.com/track/736PP5LTtREkDgktNmX3Gu" target="_blank">
                            <template v-slot:prepend>
                                <v-icon size="50" style="color: #1FDF64">mdi-spotify</v-icon>
                            </template>
                        </v-list-item>
                    </v-sheet>
                </v-col>
                <v-col cols="12" sm="4" md="3" class="mb-6">
                    <p class="font-weight-bold text-h6 my-6">Social</p>
                    <div>
                        <v-btn size="50" href="https://github.com/joren97x" target="_blank" color="black" density="compact">
                            <v-icon size="30">mdi-github</v-icon>
                        </v-btn>

                        <v-btn size="50" href="https://www.facebook.com/joren97x" target="_blank" color="black" density="compact">
                            <v-icon size="30">mdi-facebook</v-icon>
                        </v-btn>

                        <v-btn size="50" href="https://www.instagram.com/joren97x" target="_blank" color="black" density="compact">
                            <v-icon size="30">mdi-instagram</v-icon>
                        </v-btn>

                        <v-btn size="50" href="https://open.spotify.com/user/31j7mhgyggfkatw6s75x7zawlgbi" target="_blank" color="black" density="compact">
                            <v-icon size="30">mdi-spotify</v-icon>
                        </v-btn>
                    </div>
                    
                </v-col>
            </v-row>
           
            <v-divider class="my-6" />
            <p class="text-center text-caption">© Copyright 2024 . Made by Joren Sumagang</p>
            
        </v-container>
    </v-container>
</template>


<style scoped>

    .about {
        margin-top: 2%;
    }

</style>
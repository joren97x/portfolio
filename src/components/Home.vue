<script setup></script>

<template>
    <v-container fluid class="text-center" style="height: 80vh">
        <div id="free-up-space"></div>
        <p id="name" :class="['font-weight-bold', 'name', $vuetify.display.smAndDown ? 'text-h4' : 'text-h2']">Hey, I'm Joren Sumagang</p>
        <v-row justify="center">
            <v-col cols="12" sm="12" md="10"  class="subname font-weight-regular">
                <p>
                    Just a silly boy who takes on the cruel challenges presented by contemporary society.
                    <!-- 10k Roses was soooo mid bruh, only because when I went on the top of the building, a girl was screaming for her life
                    and I grabbed her by the waist and whispered “darling, it's okay for the king has arrived”. 
                    Her heart fluttered with every vocal change, her liquidity differed with every step. -->
                </p>
            </v-col>
        </v-row>
        <v-btn variant="flat" size="x-large" class="project-btn font-weight-bold" @click="$emit('navigate', 'projects')" color="green">PROJECTS</v-btn>
        <div class="d-flex justify-center align-center" v-if="$vuetify.display.mdAndUp">
                <div class="d-flex flex-column btns pa-1 bg-white">
                    <v-btn href="https://github.com/joren97x" target="_blank" size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-github</v-icon> </v-btn>
                    <v-btn href="https://www.facebook.com/joren97x" target="_blank" size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-facebook</v-icon> </v-btn>
                    <v-btn href="https://www.instagram.com/joren97x" target="_blank" size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-instagram</v-icon> </v-btn>
                    <v-btn href="https://open.spotify.com/user/31j7mhgyggfkatw6s75x7zawlgbi" target="_blank" size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-spotify</v-icon> </v-btn>
                </div>
            </div>
    </v-container>
</template>

<style scoped>

    .v-container {
        background: linear-gradient(to bottom, #EEEEEE, #FFFFFF)
    }

    .btns {
        height: 249px;
        position: absolute;
        top: 4%;
        left: 0;
    }

    .name {
        margin-top: 4%;
    }

    .subname, .project-btn {
        margin-top: 3%;
    }

    .v-btn:hover {
        background-color: #4CAF50;
        color: white;
    }

</style>
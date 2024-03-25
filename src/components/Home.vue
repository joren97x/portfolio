<script setup></script>

<template>
    <v-container fluid class="text-center bg-grey-lighten-2" style="height: 80vh">
        <p class="font-weight-bold text-h2 name">Hey, I'm Joren Sumagang</p>
        <p class="text-h6 subname font-weight-regular">10k Roses was soooo mid bruh, only because when I went on the top of the building, a girl was screaming for her life <br>
             and I grabbed her by the waist and whispered “darling, it’s okay for the king has arrived”.  <br> 
             Her heart fluttered with every vocal change, her liquidity differed with every step.</p>
        <v-btn variant="flat" size="x-large" class="project-btn font-weight-bold" @click="$emit('navigate', 'projects')" color="green">PROJECTS</v-btn>
        <div class="d-flex justify-center align-center">
                <div class="d-flex flex-column btns pa-1 bg-white">
                    <v-btn size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-github</v-icon> </v-btn>
                    <v-btn size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-facebook</v-icon> </v-btn>
                    <v-btn size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-linkedin</v-icon> </v-btn>
                    <v-btn size="60" variant="flat" rounded="0" density="compact"> <v-icon size="35">mdi-bitbucket</v-icon> </v-btn>
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
        top: 15%;
        left: 0;
    }

    .name {
        margin-top: 5%;
    }

    .subname, .project-btn {
        margin-top: 3%;
    }

    .v-btn:hover {
        background-color: #4CAF50;
        color: white;
    }

</style>
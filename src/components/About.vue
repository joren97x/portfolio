<script setup>

    const skills = [
        'HTML',
        'CSS',
        'PHP',
        'MySQL',
        'Vue.js',
        'Quasar',
        'Javascript',
        'Firebase',
        'Express',
        'Vuetify',
        'Laravel',
        'REST API'
    ]

</script>

<template>
    <v-container fluid class="outer">
        <v-container>
            <div id="free-up-space"></div>
            <p class="text-h3 text-center font-weight-bold">About me</p>
            <p class="text-center mt-10">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <v-row>
                <v-col md="6" cols="12">
                    <p class="text-h5 font-weight-bold title">Get to know me</p>
                    <p class="text-body-1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit itaque obcaecati est eius sint, nemo molestiae consequuntur maiores fugit reprehenderit 
                        alias labore, voluptatum cumque nulla magnam iste reiciendis amet. Rem quasi sunt accusamus? <br> <br> Facere iusto quam debitis porro aspernatur. Temporibus 
                        similiquee recusandae quibusdam ea, omnis temdpore asperiores rdatione qui e recusasndae quibusssam ea, omnis temporse asperiores ratione qui recusandae quibuvsdam ea, omnis tempore asperiores ratione quis praesentium tempora ad consequatur, blanditiis assumenda illo. Animi tenetur saepe ad!
                    </p>
                    <v-btn variant="flat" size="x-large" class="project-btn font-weight-bold contact" color="green" @click="$emit('navigate', 'contact')">Contact</v-btn>
                </v-col>
                <v-col md="6" cols="12">
                    <p class="text-h5 font-weight-bold title">My skills</p>
                    <v-chip label class="mx-2 mb-2 pa-5" v-for="skill in skills" :key="skill">{{ skill }}</v-chip>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<style scoped>

    .about {
        margin-top: 2%;
    }

    .v-row, .contact {
        margin-top: 5%;
    }

    .title {
        margin-bottom: 3%
    }

    .outer {
        background: linear-gradient(to bottom, #FFFFFF, #EEEEEE)
    }

</style>
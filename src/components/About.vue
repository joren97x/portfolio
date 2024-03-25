<script setup>

    const skills = [
        'HTML',
        'CSS',
        'Javascript',
        'PHP',
        'Vue.js',
        'Laravel',
        'And some other shit'
    ]

</script>

<template>
    <v-container>
        <p class="text-h3 text-center about">About me</p>
        <p class="text-center about">Here you will find more information about me, what I do, and my current skills mostly in terms <br> of programming and technology</p>
        <v-row>
            <v-col md="6">
                <p class="text-h5 font-weight-bold title">Get to know me</p>
                <p class="text-body-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit itaque obcaecati est eius sint, nemo molestiae consequuntur maiores fugit reprehenderit 
                    alias labore, voluptatum cumque nulla magnam iste reiciendis amet. Rem quasi sunt accusamus? <br> <br> Facere iusto quam debitis porro aspernatur. Temporibus 
                    similiquee recusandae quibusdam ea, omnis temdpore asperiores rdatione qui e recusasndae quibusssam ea, omnis temporse asperiores ratione qui recusandae quibuvsdam ea, omnis tempore asperiores ratione quis praesentium tempora ad consequatur, blanditiis assumenda illo. Animi tenetur saepe ad!
                </p>
                <v-btn variant="flat" size="x-large" class="project-btn font-weight-bold contact" color="green" @click="$emit('navigate', 'contact')">Contact</v-btn>
            </v-col>
            <v-col md="6">
                <p class="text-h5 font-weight-bold title">My skills</p>
                <v-chip label class="mx-2 mb-2 pa-5" size="large" v-for="skill in skills" :key="skill">{{ skill }}</v-chip>
            </v-col>
        </v-row>
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

</style>
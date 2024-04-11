<script setup>

    import ProjectCard from './ProjectCard.vue'

    const projects = [
        {
            name: 'Standard calculator',
            description: `just a calculator, nothing special`,
            image: [
                '/portfolio/calcu.png'
            ],
            overview: `
                a school project 
            `,
            tools_used: [
                'java',
                'my insanity'
            ],
            link: 'https://google.com'
        },
        {
            name: 'Weight tracker',
            description: `a simple project i made to track my weight (i only made 1 kg ahahha)`,
            image: [
                '/portfolio/weight-tracker-5.PNG',
                '/portfolio/weight-tracker-2.PNG',
                '/portfolio/weight-tracker-1.PNG',
                '/portfolio/weight-tracker-4.PNG',
                '/portfolio/weight-tracker-3.PNG'
            ],
            overview: `
                simple weight tracker, made this to learn firebase 
            `,
            tools_used: [
                'firebase',
                'chart.js',
                'vue.js',
                'vuetify',
            ],
            link: 'https://github.com/joren97x/weight-tracker'
        },
        {
            name: 'Todo plus',
            description: `enhanced or upgraded version of a to-do app`,
            image: [
                '/portfolio/taskplus.PNG',
                '/portfolio/taskplus-1-.PNG',
                '/portfolio/taskplus-2-PNG.PNG',
                '/portfolio/taskplus-3-.PNG',
            ],
            overview: `
            made this project to learn express, pinia, sequelize and jsonwebtoken
            `,
            tools_used: [
                'axios',
                'pinia',
                'vuejs',
                'vuetify',
                'jsonwebtoken',
                'sequelize',
                'express',
                'mysql'
            ],
            link: 'https://github.com/joren97x/task-management-system'
        },
        {
            name: 'Recipe Hub',
            description: `a website where you can share your recipes.`,
            image: [
                '/portfolio/recipe-hub-1.PNG',
                '/portfolio/recipe-hub-2.PNG',
                '/portfolio/recipe-hub-3.PNG',
                '/portfolio/recipe-hub-4.PNG',
                '/portfolio/recipe-hub-5.PNG',
                '/portfolio/recipe-hub-6.PNG',
                '/portfolio/recipe-hub-7.PNG',
                '/portfolio/recipe-hub-8.PNG'
            ],
            overview: `
            This the final project of one of my subjects. The project requires us to do laravel sanctum authentication tokens, CRUD operations.
                Laravel for backend and vuejs for frontend and api to connect these two mfs.
            `,
            tools_used: [
                'axios',
                'pinia',
                'vuejs',
                'vuetify',
                'laravel',
            ],
            link: 'https://github.com/joren97x/recipe-hub'
        },
        {
            name: 'Cordova Municipality Update Hub',
            description: `a school project`,
            image: [
                '/portfolio/cmuh-1.PNG',    
                '/portfolio/cmuh-6-.PNG',
                '/portfolio/cmuh-7-.PNG',
                '/portfolio/cmuh-2.PNG',
                '/portfolio/cmuh-3-.PNG',
                '/portfolio/cmuh-4-.PNG',
                '/portfolio/cmuh-5-.PNG',
                '/portfolio/cmuh-8-.PNG',
                '/portfolio/cmuh-9-.PNG'
            ],
            overview: `
            i really dont know whats the purpose of this website tbh, 
            but this is a website where each barangay can post about what's happening in their barangay or some
            `,
            tools_used: [
                'axios',
                'pinia',
                'vuejs',
                'vuetify',
                'laravel',
            ],
            link: 'https://github.com/joren97x/recipe-hub'
        },
        {
            name: 'Attendance management system',
            description: `
                school project
            `,
            image: [
                '/portfolio/asm-6-.png',    
                '/portfolio/asm-1-.png',    
                '/portfolio/asm-2-.png',    
                '/portfolio/asm-3-.png',    
                '/portfolio/asm-4-.png',    
                '/portfolio/asm-5-.png',    
                '/portfolio/asm-7-.png',    
                '/portfolio/asm-8-.png'    
            ],
            overview: `
            "Attendance Management System is a web-based application designed to streamline attendance 
            tracking for educational institutions. The system caters to two primary user roles: 
            students and teachers." - chatgpt
            `,
            tools_used: [
                'axios',
                'vuejs',
                'vuetify',
                'php',
                'mysql'
            ],
            link: 'https://github.com/joren97x/attendance-management-system'
        },
        {
            name: 'Announcement system',
            description: `
                a school project again
            `,
            image: [
                '/portfolio/account-management-3-.PNG',    
                '/portfolio/account-management-1.PNG',    
                '/portfolio/account-management-2-.PNG',    
                '/portfolio/account-management-4-.PNG',    
                '/portfolio/account-management-5-.PNG',    
                '/portfolio/account-management-6-.PNG',    
                '/portfolio/account-management-7-.PNG',    
                '/portfolio/account-management-8-.PNG',    
                '/portfolio/account-management-9-.PNG' 
            ],
            overview: `
            "Announcement System is a web-based platform designed to facilitate communication between 
            students and administrators within educational institutions. The system supports two primary
            user roles: students and administrators (admin)." - chatgpt
            `,
            tools_used: [
                'axios',
                'vuejs',
                'vuetify',
                'php',
                'mysql'
            ],
            link: 'https://github.com/joren97x/account-management-system'
        }
    ]

</script>

<template>
    <v-container fluid class="bg-grey-lighten-4">
        <v-container>
            <div id="free-up-space"></div>
            <p class="text-h3 text-center font-weight-bold">Projects</p>
            <p class="text-center mt-10">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <ProjectCard v-for="project in projects" :project="project" :key="project.name"/>
        </v-container>
    </v-container>
</template>

<style scoped>

    .outer {
        background: linear-gradient(to bottom, #EEEEEE, #FFFFFF)
    }

</style>
<script setup>

    import ProjectCard from './ProjectCard.vue'

    const projects = [
        {
            name: 'project-1',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure`,
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            overview: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam 
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            `,
            tools_used: [
                'vuejs',
                'vuetify',
                'laravel',
                'html'
            ],
            link: 'https://google.com'
        },
        {
            name: 'Project 2',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure`,
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            overview: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam 
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            `,
            tools_used: [
                'vuejs',
                'vuetify',
                'chart.js',
                'axios'
            ],
            link: 'https:google.com'
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
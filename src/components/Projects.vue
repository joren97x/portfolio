<script setup>

    import ProjectCard from './ProjectCard.vue'

    const projects = [
        {
            name: 'Taytayan Camp Hub',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/images/taytayan-camp-hub.png'
            ],
            tools_used: [
                'Laravel',
                'VueJs',
                'Quasar',
                'Pinia',
                'InertiaJs',
                'MySQL',
                'PusherJs',
                'ChartJs',
                'Paymongo API',
                'Google Maps API',
                'Figma',
            ],
            link: 'https://google.com'
        },
        {
            name: 'Virtucio Caterers',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/images/virtucio-caterers.png'
            ],
            tools_used: [
                'Laravel',
                'VueJs',
                'TailwindCss',
                'InertiaJs',
                'MySQL',
                'Paymongo API',
            ],
            link: 'https://google.com'
        },
        {
            name: 'Spotify Chat',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/images/spotify-chat.png'
            ],
            tools_used: [
                'Express',
                'VueJs',
                'MySQL',
                'Vuetify',
                'Pinia',
                'Socket.io',
                'Spotify API',
                'Jsonwebtoken',
            ],
            link: 'https://google.com'
        },
        {
            name: 'Recipe Hub',
            description: `a website where you can share your recipes. This the final project of one of my subjects. The project requires us to do laravel sanctum authentication tokens, CRUD operations.
                Laravel for backend and vuejs for frontend and api to connect these two mfs`,
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
            tools_used: [
                'VueJs',
                'Vuetify',
                'Laravel',
                'Laravel Sanctum',
                'Pinia',
            ],
            link: 'https://github.com/joren97x/recipe-hub'
        },
        {
            name: 'Cordova Municipality Update Hub',
            description: `a school project i really dont know whats the purpose of this website tbh, 
            but this is a website where each barangay can post about what's happening in their barangay or some`,
            image: [
                '/portfolio/images/cordova.png'
            ],
            tools_used: [
                'VueJs',
                'Vuetify',
                'Laravel',
                'InertiaJs',
            ],
            link: 'https://github.com/joren97x/recipe-hub'
        },
        {
            name: 'Task Management',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/weight-tracker-5.PNG',
                '/portfolio/weight-tracker-2.PNG',
                '/portfolio/weight-tracker-1.PNG',
                '/portfolio/weight-tracker-4.PNG',
                '/portfolio/weight-tracker-3.PNG'
            ],
            tools_used: [
                'Express',
                'MySQL',
                'Sequelize',
                'Jsonwebtoken',
                'Pinia',
                'VueJs',
                'Vuetify',
            ],
            link: 'https://github.com/joren97x/weight-tracker'
        },
        {
            name: 'Weight Tracker',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/weight-tracker-5.PNG',
                '/portfolio/weight-tracker-2.PNG',
                '/portfolio/weight-tracker-1.PNG',
                '/portfolio/weight-tracker-4.PNG',
                '/portfolio/weight-tracker-3.PNG'
            ],
            tools_used: [
                'Firebase',
                'ChartJs',
                'VueJs',
                'Vuetify',
            ],
            link: 'https://github.com/joren97x/weight-tracker'
        },
        {
            name: 'Weather Forecast',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/weight-tracker-5.PNG',
                '/portfolio/weight-tracker-2.PNG',
                '/portfolio/weight-tracker-1.PNG',
                '/portfolio/weight-tracker-4.PNG',
                '/portfolio/weight-tracker-3.PNG'
            ],
            tools_used: [
                'OpenWeatherMap API',
                'ChartJs',
                'VueJs',
                'Vuetify',
            ],
            link: 'https://github.com/joren97x/weight-tracker'
        },
        {
            name: 'Food Options',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/weight-tracker-5.PNG',
                '/portfolio/weight-tracker-2.PNG',
                '/portfolio/weight-tracker-1.PNG',
                '/portfolio/weight-tracker-4.PNG',
                '/portfolio/weight-tracker-3.PNG'
            ],
            tools_used: [
                'PHP',
                'MySQL',
                'Bootstrap',
            ],
            link: 'https://github.com/joren97x/weight-tracker'
        },
        {
            name: 'Standard Calculator',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel unde obcaecati dolor cumque? Voluptatem neque rem facilis alias fugiat!`,
            image: [
                '/portfolio/calcu.png'
            ],
            tools_used: [
                'Java',
            ],
            link: 'https://google.com'
        },
       
    ]

</script>

<template>
    <v-container fluid class="outer">
        <v-container class="pa-0"> 
            <div id="free-up-space"></div>
            <p class="text-h4 text-center font-weight-bold">Projects</p>
            <!-- <p class="text-center mt-10">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p> -->
            <div style="max-width: 1000px; margin: auto;">
                <ProjectCard v-for="project in projects" :project="project" :key="project.name"/>
            </div>
        </v-container>
    </v-container>
</template>

<style scoped>

    .outer {
        background: linear-gradient(to bottom, #EEEEEE, #FFFFFF);
    }

</style>
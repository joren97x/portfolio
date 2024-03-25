<script setup>

    import Navbar from './Navbar.vue'
    import Home from './Home.vue'
    import About from './About.vue'
    import Projects from './Projects.vue'
    import Contact from './Contact.vue'

    function scrollToSection(section) {
        console.log(section)
        document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

</script>

<template>
    <Navbar @navigate="scrollToSection" />
    <Home id="home" @navigate="scrollToSection" />
    <v-container fluid>
        <About id="about" @navigate="scrollToSection" />
        <Projects id="projects" />
        <Contact id="contact" />
    </v-container>
</template>
<script setup>

    import Navbar from './Navbar.vue'
    import Home from './Home.vue'
    import About from './About.vue'
    import Projects from './Projects.vue'
    import Contact from './Contact.vue'
    import Footer from './Footer.vue'

    function scrollToSection(section) {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

</script>

<template>
    <Navbar @navigate="scrollToSection" />
    <!-- <p class="text-h6">{{ $vuetify.display }}</p> -->
    <Home id="home" @navigate="scrollToSection" />
    <v-divider/>
    <About id="about" @navigate="scrollToSection" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Footer @navigate="scrollToSection" />
</template>

<style>

    #free-up-space {
        height: 100px;
        width: 100%
    }

</style>
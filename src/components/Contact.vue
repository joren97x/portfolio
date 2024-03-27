<script setup></script>

<template>
    <v-container fluid class="outer">
        <v-container>
            <div id="free-up-space"></div>
            <p class="text-h3 text-center font-weight-bold">Contact</p>
            <p class="text-center mt-10">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            
            <v-card elevation="15" width="auto">
                <v-card-item>
                    <v-text-field variant="solo-filled" placeholder="Enter your name" label="Name"></v-text-field>
                    <v-text-field variant="solo-filled" placeholder="Enter your email" label="Email"></v-text-field>
                    <v-textarea variant="solo-filled" placeholder="Enter your message" label="Message"></v-textarea>
                </v-card-item>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn size="x-large" variant="flat" color="green">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-container>
</template>

<style scoped>

    .v-card {
        margin: auto;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .outer {
        background: linear-gradient(to bottom, #FFFFFF, #EEEEEE)
    }

</style>
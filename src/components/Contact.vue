<script setup>

    import { db } from '../firebase.js'
    import { collection, addDoc } from "firebase/firestore"
    import { ref } from 'vue'

    const loading = ref(false)
    const snackbar = ref(false)
    const form_message = ref('')
    const form = ref()

    const name = ref('')
    const email = ref('')
    const message = ref('')

    async function submit() {
        const { valid } = await form.value.validate()

        if (valid) {
            try {
                loading.value = true
                const docRef = await addDoc(collection(db, "contacts"), {
                    name: name.value,
                    email: email.value,
                    message: message.value
                })
                loading.value = false
                form_message.value = "Message sent. Thanks for contacting me!"
                snackbar.value = true
            } catch (e) {
                loading.value = false
                form_message.value = "Sorry, something went wrong.."
                snackbar.value = true
            }
        }
    }

    const nameRules = ref([
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ])

    const messageRules = ref([
        v => !!v || 'Message is required',
        v => (v && v.length >= 10) || 'Message must be more than 10 characters',
    ])

    const emailRules = ref([
        value => {
            if (value) return true
            return 'E-mail is requred.'
        },
        value => {
            if (/.+@.+\..+/.test(value)) return true

            return 'E-mail must be valid.'
        },
    ])

</script>

<template>
    <v-container fluid class="outer">
        <v-container>
            <div id="free-up-space"></div>
            <p class="text-h4 text-center font-weight-bold">Contact</p>
            <p class="text-center mt-10">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            
            <v-form ref="form">
                <v-card elevation="15" width="auto">
                    <v-card-item>
                        <v-text-field v-model="name" :rules="nameRules" variant="solo-filled" placeholder="Enter your name" label="Name"></v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" variant="solo-filled" placeholder="Enter your email" label="Email"></v-text-field>
                        <v-textarea v-model="message" :rules="messageRules" variant="solo-filled" placeholder="Enter your message" label="Message"></v-textarea>
                    </v-card-item>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn size="x-large" variant="flat" :loading="loading" :disabled="loading" color="green" @click="submit()">Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-container>
        <v-snackbar v-model="snackbar">
            {{ form_message }}
        </v-snackbar>
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
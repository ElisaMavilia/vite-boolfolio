<template>
    <div class="container mt-4">
        <h1>Contact us</h1>
        <div class="row">
            <form @submit.prevent="sendForm()" class="col-12
        text-start">
            <div class="mb-3">
                <input type="text" class="form-control border-0 border-bottom" placeholder="Name" v-model="name">
            </div>
            <div class="mb-3">
                <input type="email" class="form-control border-0 border-bottom" placeholder="Email" v-model="email">
            </div>
            <div class="mb-3">
                <textarea class="form-control border-0 border-bottom" placeholder="Message" v-model="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
    export default {
        name: 'ContactComponent',
        data () {
            return {
                store,
                name: '',
                email: '',
                message: ''
            }
        },
        methods: {
            sendForm() {

                const data = {
                    name: this.name,
                    address: this.email,
                    message: this.message
                }
                console.log(data);
                axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((res) => {
                    console.log(res.data);
                    this.success = true;
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }).then((res) => {
                    
                }).catch((error) => {
                  
                }).finally(() => {
                    
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="container mt-4">
        <h1>Contact us</h1>
        <form>
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
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
      <div v-if="project">
        <h1>{{ project.title }}</h1>
        
        <p>{{ project.content }}</p>
        
        <RouterLink :to="{ name: 'single-post', params: { 'slug': 'eum-porro-sed-optio-quis-itaque-ex-harum' } }">Leggi
            Read More</RouterLink>
    </div>
</template>

<script>
    import { store } from '../store';
    import axios from 'axios';

    export default {
    name: 'PostComponent',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getSingleProject() {
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res) => {
                console.log('qui',res.data.results);
                this.project = res.data.results;
            })
        }
    },
    mounted() {
        this.getPost();
    },
}
</script>

<style lang="scss" scoped>

</style>
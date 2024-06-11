<template>
    <div class="container mt-4">
        <div class="card" v-if="project">
        <h1>{{ project.title }}</h1>
        <img v-if="project.image" :src="store.imgBasePath + project.image" :alt="project.title">
        <img v-else src="/images/placeholder.png" :alt="project.title">
        <p>{{ project.content }}</p>
    </div>
    </div>
      
</template>

<script>
    import { store } from '../store';
    import axios from 'axios';

    export default {
    name: 'ProjectCard',
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
        this.getSingleProject();
    },
}
</script>

<style lang="scss" scoped>

</style>
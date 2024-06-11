<template>
    <div>
       
      <h1 class="text-center">Elenco dei progetti</h1>
  <i class="fa fa-solid fa-suitcase ps-4"></i>
  <ul>
    <li v-for="project in projects" :key="project.id">{{ project.title }}
      <img v-if="project.image" :src="project.image" :alt="project.title">
    </li>
  </ul>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a @click="getAllProjects()"class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="{{ project.results.first_page }}">1</a></li>
    <li class="page-item"><a @click="getAllProjects()" class="page-link" href="#">2</a></li>
    <li class="page-item"><a @click="getAllProjects()" class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a @click.prevent="getAllProjects()" class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'App',
    data() {
      return {
        store,
        projects: [],
        nextPage: 1,
        currentPage: 1,
        lastPage: 1
      }
    },
    methods: {
       getAllProjects() {
        axios.get(this.store.apiBaseUrl + '/projects', { params: { page: this.nextPage } }).then((res) => {
          console.log(res.data);
          this.projects = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.nextPage = this.currentPage +1;
          this.lastPage = res.data.results.last_page;
        });
      },
  },
  mounted() {
    this.getAllProjects();
  }
}
</script>


<style lang="scss" scoped>

</style>
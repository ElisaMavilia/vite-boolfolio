<template>
  <div class="container">
     
    <h1 class="">Elenco dei progetti</h1>

<div class="row">
<div class="col-12 col-md-3 col-lg-6" v-for="project in projects" :key="project.id">
    <CardComponent :item="project"/> <!-- il contenuto di project viene passato al generico item che, a sua volta, viene passato come props nel CardComponent  -->
  </div>
</div>
  
<!-- Qui va la pagination -->
<nav aria-label="Page navigation example">
<ul class="pagination">
  <li class="page-item">
    <a @click="getAllProjects()" class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </a>
  </li>
  <li class="page-item"><a @click="getAllProjects()" class="page-link" href="#">1</a></li>
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
import CardComponent from '../components/CardComponent.vue';
export default {
  name: 'ProjectList',
  components: { 
    CardComponent 
  },
  data() {
    return {
      store,
      projects: [],
      nextPage: 1,
      currentPage: 0,
      totalPage: 0,
      params: null
    }
  },
  methods: {
     getAllProjects() {
      axios.get(this.store.apiBaseUrl + '/projects', { params: { page: this.nextPage } }).then((res) => {
        console.log(res.data);
        this.projects = res.data.results.data;
        this.currentPage = res.data.results.current_page;
        this.nextPage = this.currentPage +1;
        this.totalPage = res.data.results.last_page;
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
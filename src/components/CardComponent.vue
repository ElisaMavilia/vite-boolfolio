<template>
    <!-- {{ item }} -->
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="getImage" class="img-fluid rounded-start" :alt="item.title">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}
        </h5>
        <p class="card-text">{{item.content}}</p>
        <p class="card-text"><small class="text-body-secondary">{{item.updated_at}}</small></p>
        <RouterLink :to="{ name: 'single-project', params: { 'slug': item.slug } }" class="btn btn-warning">
            Read More</RouterLink>
      </div>
    </div>
  </div>
</div>

</template>

<script>
    import { store } from '../store';
    export default {
        name: 'CardComponent',
        props: ['item'],
        data() {
            return {
                store
            }
        },
        computed: {
        getImage() {

            return this.item.image ? this.store.imgBasePath + this.item.image : './images/placeholder.png';
        }
    }
    }
    
</script>

<style lang="scss" scoped>
    img{
        object-fit: cover;
    }
</style>
<template>
  <div class="home">
    <navbar @search="abc"></navbar>
    <cardVue v-bind:posts="searchedPosts" v-bind:visibleFalse="visibleFalse"></cardVue>
  </div>
</template>

<script>
import axios from 'axios'
import cardVue from '@/components/UI/card.vue';
import navbar from '@/components/UI/navbar.vue'
export default {
  name: 'HomeView',
  components: {
    cardVue,
    navbar
  },
 
  data() {
    return {
      posts: [],
      searchQuery: '',
      warning: 'Совпадений не найдено',
    }
  },
  methods: {
    closeSearch() {
      this.visibleFalse = true
    },
    abc(find) {
        this.searchQuery = find
    }
  }, 
  computed: {
    searchedPosts() {
       if (this.searchQuery == '') {
        return this.posts
      } else if (this.posts.filter(posts => posts.id == this.searchQuery).length == 0) {
        return this.posts
      } else {
        return this.posts.filter(posts => posts.id == this.searchQuery) 
 }
    }
  },
  mounted() {
    axios
      .get('http://localhost:8081/posts')
      .then(response => (this.posts = response.data));
  }

}
</script>

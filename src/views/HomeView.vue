<template>
  <div class="home">
    <navbar @search="abc"></navbar>
    <cardVue class="cardVue" v-bind:posts="searchedPosts" v-if="searchedPosts" v-bind:visibleFalse="visibleFalse"></cardVue>
    <warning_message class="warning_message" v-else></warning_message>
  </div>
</template>

<script>
import axios from 'axios'
import warning_message from '@/components/UI/warning_message.vue';
import cardVue from '@/components/UI/card.vue';
import navbar from '@/components/UI/navbar.vue'
export default {
  name: 'HomeView',
  components: {
    cardVue,
    navbar,
    warning_message
  },
 
  data() {
    return {
      posts: [],
      searchQuery: '',
      isPostsLoadnig: true,
    }
  },
  methods: {
    closeSearch() {
      this.visibleFalse = true
    },
    abc(find) {
        this.searchQuery = find;

    }
  },
  watch: {

  }, 
  computed: {
    searchedPosts() {
       if (this.searchQuery == '') {
        return this.posts
      } else if (this.posts.filter(posts => posts.id == this.searchQuery).length == 0) {
          return false
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

<style>

</style>
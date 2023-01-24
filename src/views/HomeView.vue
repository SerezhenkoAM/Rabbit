<template>
  <div class="home">
    <navbar @search="abc"></navbar>
    <cardVue v-bind:posts="searchedPosts" v-bind:visibleFalse="visibleFalse"></cardVue>
  </div>
</template>

<script>
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
      posts: [
        {id: 1, heading: 'Запись 1', text: 'Начало жизни'},
        {id: 2, heading: 'Запись 2', text: 'Продожение жизни'},
        {id: 3, heading: 'Запись 3', text: 'Великое продолжение жизни'},
        {id: 4, heading: 'Запись 4', text: 'Пик жизни'},
        {id: 5, heading: 'Запись 5', text: 'Угасание жизни'},
        {id: 6, heading: 'Запись 6', text: 'Смерть'},
      ],
      searchQuery: '',
      warning: 'Совпадений не найдено',
    }
  },
  methods: {
    closeSearch() {
      this.visibleFalse = true
    },
    initPages() {
      this.newposts = this.posts
    },
    abc(find) {
        this.searchQuery = find
      },
  },
  computed: {
    searchedPosts() {
       if (this.searchQuery == '') {
        return this.posts
      } else if (this.posts.filter(posts => posts.id == this.searchQuery).length == 0) {
        return null
 } else {
  return this.posts.filter(posts => posts.id == this.searchQuery)
 }
    }
  }

}
</script>

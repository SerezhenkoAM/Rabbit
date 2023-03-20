<template>
  <div class="home" @click="close_esc">
    <navbar @search="abc" v-bind:searchVisible="searchVisible" v-bind:notOpen="notOpen"></navbar>
    <warning_message_none v-if="noneBlogs"></warning_message_none>
    <cardVue class="cardVue" v-bind:posts="searchedPosts" v-if="searchedPosts" v-bind:visibleFalse="visibleFalse"></cardVue>
    <warning_message class="warning_message" v-else></warning_message>
    <div class="btn_nextback_wrapper" :class="{'delete': searchQuery != ''}" v-if="load">
      <button class="btn__back" @click="prevPage" :disabled="pageNumber==0">&lt;- Вернуться</button>
      <button class="btn__next" @click="nextPage" :disabled="pageNumber > pages -2">Дальше -></button>
      <span></span>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import warning_message from '@/components/UI/warning_message.vue';
import cardVue from '@/components/UI/card.vue';
import navbar from '@/components/UI/navbar.vue';
import warning_message_none from '@/components/UI/warning_message_none.vue';
export default {
  name: 'HomeView',
  components: {
    cardVue,
    navbar,
    warning_message,
    warning_message_none,
  },
 
  data() {
    return {
      posts: [],
      searchQuery: '',
      isPostsLoadnig: true,
      searchVisible: false,
      pageCount: 1,
      pageNumber: 0,
      pages: 0,
      load: false,
      showNext: true,
      noneBlogs: false,
      notOpen: false,
    }
  },
  methods: {
    closeSearch() {
      this.visibleFalse = !this.visibleFalse
    },
    abc(find) {
        this.searchQuery = find;
        this.showNext = false
    },
    close_esc() {
      this.searchVisible = false
      setTimeout(() => {
        this.searchVisible = true
      }, 2000);
    },
    nextPage(){
      this.pageNumber++;
      },
    prevPage(){
      this.pageNumber--;
      },
    async fetchPosts() {
      axios
        .get('?')
        .then((response) => {     
          this.posts = response.data.reverse() 
          if (this.posts.length == 0) {
            this.load = false
            this.noneBlogs = true
          } else {
            this.load = true
          }
          this.pages = Math.ceil(this.posts.length/5);
        })
        .catch(() => {
          if (this.posts.length == 0) {
            this.noneBlogs = true
            this.notOpen = true
          }
        })
    } 
  }, 
  computed: {
    searchedPosts() {
      if (this.searchQuery == '') {
        let start = this.pageNumber * 5,
        end = start + 5
        return this.posts.slice(start, end); 
      } else if (this.posts.filter(posts => posts.id == this.searchQuery).length == 0) {
        return false
      } else {
        return this.posts.filter(posts => posts.id == this.searchQuery)
      }
    },
  },
  mounted() {
    this.fetchPosts()
  } 
}
</script>

<style>

@font-face {
	font-family: 'DinPro'; 
	src: url(@/components/UI/font/dinpro.otf); 
}

.delete {
  display: none !important;
}

.btn_nextback_wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.btn__next, .btn__back {
  margin: 30px auto;
  background-color: white;
  border: 1.5px solid black; 
  border-radius: 5px;
  font-family: 'DinPro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 37px;
  text-align: center;
}

.btn__next {
  box-shadow: inset 0 0 rgb(0, 0, 0);
  transition: all 0.5s ease-out;
}

.btn__next:hover {
  box-shadow: inset 12em 0 #000000;
  cursor: pointer;
  color: rgb(0, 0, 0);
  color: white
}

.btn__back {
  position: relative;
  background: rgb(255, 255, 255);
  z-index: 1;
  transition: all 0.3s ease-out;
}

.btn__back:hover {
  color: black;
  cursor: pointer;
  color: white;
}

.btn__back::after {
  content: " ";
  position: absolute;
  height: 100%;
  width: 0;
  background: #000000;
  right: 0;
  top: 0;
  border-radius: 5px;
  z-index: -1;
  transition: all 0.3s ease-out;
}

.btn__back:hover:after {
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .btn__next {
    box-shadow: inset 0 0 white;
  }

  .btn__next:hover {
    box-shadow: none;
    cursor: none;
    color: black;
  }

  .btn__back {
    position: relative;
    background: rgb(255, 255, 255);
    z-index: none;
    transition: none;
  }
  .btn__back:hover {
    color: black;
    cursor: pointer;
  }

  .btn__back::after {
    content: " ";
    position: absolute;
    height: 100%;
    width: 0;
    background: white;
    color: black;
    right: 0;
    top: 0;
    border-radius: 5px;
    z-index: -1;
    transition: none;
  }

  .btn__back:hover:after {
    width: 100%;
  }
}


</style>
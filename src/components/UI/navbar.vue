<template>
    <div class="navbar-nav" v-bind:class="{navbar_smaller: show}">
        <router-link class="nav-link"  to="/"><img class="navbar-nav_item" src="@/components/UI/img/home_black.png" alt="Домой" @click="openAbout()"></router-link>
        <router-link class="nav-link" v-bind:class="{notvisible : show}" to="/"><img class="navbar-nav_item navbar-nav_item__search" src="@/components/UI/img/search.png" alt="Поиск" @click="openSearch()"></router-link>
        <router-link class="nav-link" v-bind:class="{notvisible : show}" to="/about"><img class="navbar-nav_item navbar-nav_item__about" src="@/components/UI/img/info.svg" alt="Инфо" @click="openAbout()"></router-link>
    </div>
    <form @submit.prevent>
        <input type="number" class="navbar-input" v-if="visible" placeholder="Найти запись №" @input="inputdata()" v-model="find"/>
    </form>
</template>
<script>
export default {
    name: 'navbar-element',
    props: {
        close: Boolean,
        posts: Array

    },
    data() {
        return {
            visible: false,
            find: '',
            show: false,
            height: 100,
        }
    },
    methods: {
        openSearch() {
            this.visible = !this.visible
        },
        inputdata() {
                this.$emit('search', this.find)

            },
        openAbout() {
            this.show = !this.show
            if (this.show == true) {
                this.height = 150;
            }
        }
        },
}
</script>
<style>

@keyframes search {
    0% {
       transform: translate(0px,-100px);
    }
    100% {
        transform: translate(0px,0px);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.navbar-nav {
    text-align: center;
    position: fixed;
    margin: 0px;
    padding: 0px;
    width: 75px;
    height: 350px;
    left: 50px;
    top: 25%;
    bottom: 50%;
    border: 2px solid black;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-around;
    align-items: center;
}

.navbar-nav_item {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    filter: drop-shadow(-7px 6px 7px black);

}

.notvisible {
    display: none;
}

.navbar_smaller {
    height: 100px;
    top: 50%;
}


.navbar-input {
    margin: 0 auto;
    display: block;
    position: fixed;
    border: 2px solid black;
    border-radius: 10px;
    padding: 15px;
    width: 40vw;
    margin-bottom: 20px;
    font-size: 1rem;
    -moz-appearance: textfield;
	-webkit-appearance: textfield;
	appearance: textfield;
    animation: search 0.3s;
    top: 3%;
    left: 30%;
}

.navbar-input::-webkit-outer-spin-button,
.navbar-input::-webkit-inner-spin-button {
    display: none;
}

.nav-button {
    display: block;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background-color: white;
    color: black;
    margin: 0 auto;
}

@media screen and (max-width: 1000px) { 

    .navbar-nav { 
        display: grid;
        grid-column: 20px;
        padding: 20px 0;
        margin: 0 auto;
        position: static;
        width: 90%;
        height: 10%;
        grid-template-columns: repeat(3, 1fr);

    }

    .navbar-input {
        margin: 10px auto;
        font-size: 20px;
        display: block;
        border: 2px solid black;
        border-radius: 15px;
        padding: 10px;
    }

    .nav-button {
        display: block;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        background-color: white;
        color: black;
        margin: 0 auto;
    }
}


</style>
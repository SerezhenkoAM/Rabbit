<template>
    <div class="navbar-nav" @keyup.esc="openSearch()">
        <router-link class="nav-link" to="/"><img class="navbar-nav_item" src="@/components/UI/img/home_black.png" alt="Домой" @click="reloadPage()"></router-link>
        <router-link class="nav-link" to="/"><img class="navbar-nav_item navbar-nav_item__search" src="@/components/UI/img/search.png" alt="Поиск" @click="openSearch()"></router-link>
        <router-link class="nav-link" to="/about"><img class="navbar-nav_item navbar-nav_item__about" src="@/components/UI/img/info.svg" alt="Писатель_инфо"></router-link>
    </div>
    <form @submit.prevent>
        <transition name="fade">
            <input type="number" @keyup.esc="openSearch()" class="navbar-input" v-if="visible" placeholder="Найти запись №" @input="inputdata()" v-model="find"/>
        </transition>
    </form>
</template>
<script>
export default {
    name: 'navbar-element',
    props: {
        searchVisible: Boolean,
    },
    data() {
        return {
            visible: false,
            find: '',
            show: false,
        }
    },
    methods: {
        openSearch() {
            this.visible = !this.visible 
            this.find = ""
            this.$emit('search', this.find)
        },
        inputdata() {
            this.$emit('search', this.find)
        },
        reloadPage() {
            window.location.reload()
        }
    },
    watch: {
        searchVisible() {
        }
    }
}
</script>
<style>

.fade-enter-from {
    transform: translateY(-100px);
}

.fade-enter-to {
    transform: translateY(0px);
}

.fade-enter-active {
    transition: all 0.2s;
}

.fade-leave-from {
    transform: translateY(0px);
}

.fade-leave-to {
    transform: translateY(-100px);
}

.fade-leave-active {
  transition: all 0.4s;
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

.navbar-input {
    display: block;
    margin: 0 auto;
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
    /* animation: search 0.3s; */
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

    .fade-enter-from {
        transform: translateX(-1000px);
        opacity: 0;
    }

    .fade-enter-to {
        transform: translateX(0px);
        opacity: 1;
    }

    .fade-enter-active {
        transition: all 0.5s;
    }

    .fade-leave-from {
        transform: translateX(0px);
        opacity: 1;
    }

    .fade-leave-to {
        transform: translateX(1000px);
        opacity: 0;
    }

    .fade-leave-active {
    transition: all 0.5s;
    }

    .navbar-nav { 
        display: grid;
        grid-column: 20px;
        padding: 20px 0;
        margin: 15px auto;
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
        border-radius: 10px;
        padding: 10px;
        top: 18%;
        left: 23%;
        width: 50vw;
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
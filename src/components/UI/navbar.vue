<template>
    <div class="navbar-nav" @keyup.esc="openSearch()">
        <router-link class="nav-link" to="/"><img class="navbar-nav_item navbar-nav_item__home" src="@/components/UI/img/home_black.png" alt="Домой" @click="reloadPage()"></router-link>
        <router-link class="nav-link" to="/"><img class="navbar-nav_item navbar-nav_item__search" src="@/components/UI/img/search.png" alt="Поиск" @click="openSearch()"></router-link>
        <router-link class="nav-link" to="/about"><img class="navbar-nav_item navbar-nav_item__about" src="@/components/UI/img/info.svg" alt="Писатель_инфо" @click="toUp()"></router-link>
    </div>
    <form @submit.prevent>
        <transition name="fade" mode="out-in">
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
        },

    },
    watch: {

    }
}
</script>
<style>

@keyframes height {
    from{
        height: 13px;
        height: 100px;
        top: 58%;
        padding-top: 20px;
        height: 65px;

    }
    to {
        height: 350px;
        padding: 0;
        top: 25%;
        height: 350px;
    }
}

@keyframes opacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-enter-from {
        transform: translate(0,-200%);
        opacity: 0;
    }

    .fade-enter-to {
        transform: translate(0,0);
        opacity: 1;
    }

    .fade-enter-active {
        transition: all 0.4s;
    }

    .fade-leave-from {
        transform: translate(0,0);
        opacity: 1;
    }

    .fade-leave-to {
        transform: translate(0,-200%);
        opacity: 0;
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
    animation: height .7s;
}

.navbar-nav_item {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    filter: drop-shadow(-7px 6px 7px black);
    animation: opacity 2s;

}

.navbar-nav_item__home {
    animation: none !important;
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
    animation: fade 0.3s; 
    top: 3%;
    left: 30%;
    z-index: 9999; 
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
        /* transform: translateX(-1000px); */
        transform: translateY(-50px);
        margin-top: 0px;
        opacity: 0;
    }

    .fade-enter-to {
        transform: translateY(0px);
        margin-top: 0px;
        opacity: 1;
    }

    .fade-enter-active {
        transition: all 0.5s;
    }

    .fade-leave-from {
        transform: translateY(0px);
        margin-top: 0px;
        opacity: 1;
    }

    .fade-leave-to {
        transform: translateY(-35px);
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
        grid-template-columns: repeat(3, 33%);
        animation: slide_top .7s;
    }

    .navbar-input {
        position: absolute;
        margin: 10px auto;
        font-size: 20px;
        display: block;
        border: 2px solid black;
        border-radius: 10px;
        padding: 10px;
        top: 120px;
        left: 23%;
        width: 50vw;
        animation: search-opacity .7s;
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
<template>
    <div class="navbar-nav_only_to_home">
        <router-link class="nav-link_only_to_home"  to="/"><img class="navbar-nav_item_only_to_home" src="@/components/UI/img/home_black.png" alt="Домой" @click="openAbout()"></router-link>  
    </div>
</template>
<script>
export default {
    name: "navbar_only_to_home",

}
</script>
<style>
.navbar-nav_only_to_home {
    text-align: center;
    position: fixed;
    margin: 0px;
    padding: 0px;
    width: 75px;
    height: 100px;
    left: 50px;
    top: 50%;
    bottom: 50%;
    border: 2px solid black;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-around;
    align-items: center;
}

.navbar-nav_item_only_to_home {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    filter: drop-shadow(-7px 6px 7px black);

}

@media screen and (max-width: 1000px) { 

    .navbar-nav_only_to_home { 
        padding: 20px 0;
        margin: 15px auto;
        position: static;
        width: 90%;
        height: 10%;
    }

    .navbar-input_only_to_home {
        margin: 10px auto;
        font-size: 20px;
        display: block;
        border: 2px solid black;
        border-radius: 15px;
        padding: 10px;
    }

    .nav-button_only_to_home {
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
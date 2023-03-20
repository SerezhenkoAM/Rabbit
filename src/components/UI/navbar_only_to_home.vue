<template>
    <div class="navbar-nav_only_to_home">
        <router-link class="nav-link_only_to_home"  to="/"><img class="navbar-nav_item_only_to_home" src="@/components/UI/img/home_black.png" alt="Домой" @click="openAbout()"></router-link> 
        <img class="navbar-nav_item navbar-nav-to-home_item__search nav-link" src="@/components/UI/img/search.png" alt="Поиск" @click="openSearch()">
        <img class="navbar-nav_item navbar-nav-to-home_item__about nav-link" src="@/components/UI/img/info.svg" alt="Писатель_инфо" @click="toUp()">
    </div>
</template>
<script>
export default {
    name: "navbar_only_to_home",
}
</script>
<style>

@keyframes slide_top {
    from {
        transform: translate(0,-200%);
    }   
    to {
        transform: translate(0,0);
    } 
}


@keyframes height2 {
    from {
        height: 350px;
        padding: 0;
        top: 25%;
        height: 350px;
    }
    to {
        height: 13px;
        height: 100px;
        top: 58%;
        padding-top: 20px;
        height: 65px;

    }
}

@keyframes opacity2 {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.navbar-nav_only_to_home {
    text-align: center;
    position: fixed;
    margin: 0px;
    padding: 0px;
    width: 75px;
    height: 65px;
    left: 50px;
    top: 58%;
    bottom: 50%;
    border: 2px solid black;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-around;
    align-items: center;
    animation: height2 .55s; 
    padding-top: 20px;
}

.navbar-nav-to-home_item__search {
    opacity: 0;
    animation: opacity2 .3s forwards;
}

.navbar-nav-to-home_item__about {
    opacity: 0;
    animation: opacity2 .3s forwards;
}

.navbar-nav_item_only_to_home {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    filter: drop-shadow(-7px 6px 7px black);
    animation: none;

}

@media screen and (max-width: 1000px) { 

    .navbar-nav_only_to_home { 
        margin: 15px auto;
        position: static;
        width: 90%;
        animation: slide_top .7s;
    }

    .navbar-nav-to-home_item__search {
        animation: none;
    }

    .navbar-nav-to-home_item__about {
        visibility: hidden;
        animation: none;
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
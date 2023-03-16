<template>  
    <div class="card-block" :key="post.id" v-for="post in posts">
        <div class="card-body_h1">
            <h1 class="card-body_h1">{{ post.heading }}</h1>
        </div>
        <div class="card-body_p">
            <p>{{ post.text }}</p>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'card-element',
    props: {
        posts: Array,
    } ,
    
}
</script>

<style> 

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


@font-face {
	font-family: 'DinPro'; 
	src: url(@/components/UI/font/dinpro.otf); 
}

@font-face {
	font-family: 'ProximaNova'; 
	src: url(@/components/UI/font/proximanova_bold.otf); 
}


@keyframes slide-top-block {
  from {
    margin-bottom: 50%;
    opacity: 0;
    /* margin-top: -50%; */
  }
  to {
    margin-bottom: 0%;
    opacity: 1;
    /* margin-top: 50px; */
  }
}


.card-block {
    width: 40vw;
    height: inherit;
    margin: 0 auto;
    padding: 30px 80px;
    border: 2px solid black;
    border-radius: 25px;
    /* animation: opacity 1s ease-in; */
    /*Удалить при испоьлзовании в проекте*/
    margin-top: 50px;
    animation: opacity 2s; 
}

/*   .card-block:nth-child(1) {
    animation: opacity 10s !important;
} */

/* .card-block:nth-child(odd) {
    animation: slide-left 2s;
} 
 */


.card-body_h1 {
    color: black;
    text-align: left;
    font-family: 'ProximaNova';
    overflow: initial;
}

.card-body_p {
    text-align: justify;
    color: black;
    max-width: 90%;
    height: 100%;
    margin-left: 20px;
    text-align: left;
    word-wrap: break-all;
    overflow:initial;
    font-family: 'DinPro';
}

@media screen and (max-width: 1000px) {
    .card-body_p {
        font-size: 1.2rem;
    }

    .card-body_h1 {
        font-size: 2.5rem;
    }

    .card-block {
        padding: 20px 60px;
        width: 70%;

    }
}

@media screen and (max-width: 500px) {
    .card-body_p {
        font-size: 1.1rem;
    }

    .card-body_h1 {
        font-size: 1.9rem;
    }

    .card-block {
        padding: 20px 10vw;
        width: 70%;

    }
}


</style>
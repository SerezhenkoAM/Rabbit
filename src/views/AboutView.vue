<template>
  <navbar_only_to_home></navbar_only_to_home>
  <div class="about">
    <div class="header">
      <img src="@/components/UI/img/face.jpg" alt="" class="person-image" style="object-fit: cover;">
    </div>
    <div class="num-one">
      <p class="nume-one_text">1</p>
    </div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="card-block__about">
        <div class="card-body_p__about">
            <p class="card-text__about">Краткое описание автора</p>
        </div> 
    </div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="num-one">
      <p class="nume-one_text">2</p>
    </div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="card-block__about">
        <div class="card-body_p__about">
            <p class="card-text__about">
              Более подробное описание автора, вида:
              <br />
              'Семейное положение: женат'
            </p>
        </div> 
    </div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="num-one">
      <p class="nume-one_text">3</p>
    </div>
  </div>
</template>

<script>
import navbar_only_to_home from "@/components/UI/navbar_only_to_home.vue"

export default {
  name: 'AboutView',
  components: {
    navbar_only_to_home
},
  data() {
    return {
      
    }
  }
}

</script>
<style>

body {
  padding: 0;
  margin: 0;
} 

@keyframes opacity {
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
}

@keyframes slide-top-blocks {
  from {
    margin-top: -200%
  }
  to {
    margin-top: 0%
  }
}

@keyframes slide-right-stick {
  from {
    height: 0px;
    margin-top: -30px;
    margin-bottom: -25px;
  }
  to {
    height: 20px;
    margin-top: 0px;
    margin-bottom: 15px;
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

.about {
  animation: opacity 1s;
}

.header {
  width: 100%;
  height: 200px;
  background-image: url("@/components/UI/img/background.jpg");
  background-repeat: space;
  backdrop-filter: blur(10px);
  padding-top: 35px;
}

.person-image {
  display: block;
  margin: 0px auto;
  text-align: center;
  width: 200px;
  height: 130px;
  border: 1px solid #000000;
  border-radius: 50px; 
}

.num-one {
  margin: 15px auto;
  margin-top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
}

.nume-one_text {
  text-align: center;
  vertical-align: center;
}

.line {
  margin: 0 auto;
  width: 2px;
  height: 20px;
  margin-bottom: 15px;
  background-color: black;
  animation: opacity .5s;
}

.card-block__about {
  width: 40vw;
  height: inherit;
  margin: 0 auto;
  padding: 20px 15px;
  border: 2px solid black;
  border-radius: 25px;
  margin-bottom: 15px;
}

.card-body_p__about {
  color: black;
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
  text-align: left;
  word-wrap: break-all;
  overflow:initial;
  font-family: 'DinPro';
}

.card-text__about {
  font-size: 1.1rem;
  text-align: justify;
}

@media screen and (max-width: 1000px) {
  .card-body_p__about {
    font-size: 1.2rem;
  }

  .card-body_h1__about {
    font-size: 2.5rem;
  }

  .card-block__about {
    padding: 20px 60px;
  }
}

@media screen and (max-width: 700px) {
  .card-body_p__about {
    font-size: 1.1rem;
  }

  .card-body_h1__about {
    font-size: 1.9rem;
  }

  .card-block__about {
    width: 80%;
    margin: 0 auto;
    padding: 10px 15px;
  }
  .person-image {
    margin-top: 25px;
  }
}
</style>

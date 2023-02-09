<template>
  <div class="about">
    <navbar></navbar>
    <div class="header">
      <img src="" alt="" class="person-image">
    </div>
    <div class="num-one">
      <p class="nume-one_text">1</p>
    </div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="card-block__about">
        <div class="card-body_p__about">
            <p class="card-text__about">Привет! Меня зовут Луиза. Мне 36 лет. Очень важно быть счастливым и не на что не обрадщать внимание. Ведь смысл нашей дизни в чем ? Учеба важнейший момент в жизни она как много в жизни позволяеь оазвиваться, а оазвттьие  апгещй жтзгт оснгл важно</p>
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
            <p class="card-text__about">Семейное положение: жената
              <br />Дети: не имеются
              <br />Семья: Сестра, мама, папа
              <br />Домашние животные: пес Гамми
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
import navbar from '@/components/UI/navbar.vue';

export default {
  name: 'AboutView',
  components: {
    navbar
},
 
  data() {
    return {
      
    }
  }
}

</script>
<style>

@font-face {
	font-family: 'DinPro'; 
	src: url(@/components/UI/font/dinpro.otf); 
}

@font-face {
	font-family: 'ProximaNova'; 
	src: url(@/components/UI/font/proximanova_bold.otf); 
}


.header {
  width: 100%;
  height: 200px;
  background-image: url("");
  backdrop-filter: blur(10px);
  padding-top: 3%;
}

.person-image {
  display: block;
  width: 200px;
  height: 130px;
  border: 1px solid #000000;
  border-radius: 50px; 
  object-fit: cover;
  margin: 10px auto;
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
</style>

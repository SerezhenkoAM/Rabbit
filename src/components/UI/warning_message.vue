<template>
    <div class="warning_wrap">
        <p class="warning_msg">Такого блога еще не написали</p>
    </div>
</template>
<script>
export default {
    name: "warning_message"
}
</script>
<style>
.warning_msg {
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    letter-spacing: 0.55em;
    text-align: center;
}

.warning_wrap {
    display: block;   
    margin-top: 35vh;
}

@media screen and (max-width: 1300px) {
        .warning_wrap {
        display: block;  
        width: 70%; 
        margin: 0 auto;
        margin-top: 32vh;
    }
        .warning_msg {
        letter-spacing: 0.45em;
    }
}

@media screen and (max-width: 600px) {
        .warning_wrap {
        display: block;  
        width: 70%; 
        margin: 0 auto;
        margin-top: 24vh;
    }
        .warning_msg {
        letter-spacing: 0.3em;
        font-size: 25px;
    }
}



</style>
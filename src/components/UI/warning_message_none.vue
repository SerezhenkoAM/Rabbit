<template>
    <div class="warning_none_wrap">
        <p class="warning_none_msg">Список блогов пуст</p>
    </div>
</template>
<script>
export default {
    name: "warning_message_none"
}
</script>
<style>

.warning_none_msg {
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    letter-spacing: 0.55em;
    text-align: center;
}

.warning_none_wrap {
    display: block;   
    margin-top: 42vh;
    animation: opacity .7s;
}

@media screen and (max-width: 1300px) {
    .warning_none_wrap {
        display: block;  
        width: 70%; 
        margin: 0 auto;
        margin-top: 32vh;
    }

    .warning_none_msg {
        letter-spacing: 0.45em;
    }
}

@media screen and (max-width: 600px) {
    .warning_none_wrap {
        display: block;  
        width: 70%; 
        margin: 0 auto;
        margin-top: 30vh;
    }
    .warning_none_msg {
        letter-spacing: 0.3em;
        font-size: 25px;
    }
}

</style>
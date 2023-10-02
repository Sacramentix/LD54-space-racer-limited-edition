<script setup lang="ts">
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';

</script>

<template>
<div game-block block-7>
    <RedElement/>
    <RedElement/>

    <GreenElement/>
    <GreenElement/>
</div>
</template>

<style lang="scss">
[block-7] {

    :nth-child(1) {
        width: 110vw;
        height: 5vw;
        right: 0vw;
        top: 10vw;
        transform-origin: 100% 0;
        transform: rotate(-20deg) translate(-20vw, -10vw);
        border-radius: 5vw;
    }

    :nth-child(2) {
        width: 110vw;
        height: 5vw;
        right: 0vw;
        top: 10vw;
        transform-origin: 100% 0;
        transform: rotate(-20deg) translate(10vw);
        border-radius: 5vw;
    }

    :nth-child(3) {
        width: 5vw;
        height: 5vw;
        right: 2vw;
        top: 18vw;
        border-radius: 5vw;
    }

    :nth-child(4) {
        width: 5vw;
        height: 5vw;
        left: 2vw;
        top: 27vw;
        border-radius: 5vw;
    }
    
}
</style>

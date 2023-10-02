<script setup lang="ts">
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';




</script>

<template>
<div game-block block-0>
    <RedElement/>
    <RedElement/>
    <GreenElement/>
    <RedElement/>
    <RedElement/>
    <RedElement/>
    <RedElement/>
    <p>This is the first segment ever made!</p>
</div>
</template>

<style lang="scss">
[block-0] {
    :nth-child(1) {
        width: 80vw;
        height: 10vw;
        left: 0;
        top: 0;
        border-radius: 0 5vw 5vw 0;
    }
    :nth-child(2) {
        width: 80vw;
        height: 10vw;
        right: 0;
        top: 25vw;
        border-radius: 5vw 0 0 5vw;
    }
    :nth-child(3) {
        border-radius: 100vw;
        width: 10vw;
        height: 10vw;
        right: 5vw;
        top: 37vw;
    }
    :nth-child(4) {
        width: 25vw;
        height: 25vw;
        border-radius: 5vw;
        left: 25vw;
        top: 50vw;
    }
    :nth-child(5) {
        width: 50vw;
        height: 2vw;
        right: 25vw;
        bottom: 10vw;
        border-radius: 1vw;
    }
    :nth-child(6) {
        width: 45vw;
        height: 2vw;
        right: 0;
        bottom: 0;
        border-radius: 1vw 0 0 1vw;
    }   
    :nth-child(7) {
        width: 45vw;
        height: 2vw;
        left: 0;
        bottom: 0;
        border-radius: 0 1vw 1vw 0;
    }
    p {
        position: absolute;
        width: 100vw;
        top: 11vw;
        text-align: center;
    }
}
</style>

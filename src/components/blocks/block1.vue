<script setup lang="ts">
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';




</script>

<template>
<div game-block block-1>
    <RedElement/>
    <RedElement/>
    <GreenElement/>
    <RedElement/>
    <RedElement/>
    <RedElement/>
    <GreenElement/>
</div>
</template>

<style lang="scss">
[block-1] {
    :nth-child(1) {
        width: 15vw;
        height: 5vw;
        left: 0;
        top: 0;
        border-radius: 0 5vw 0 0;
    }
    :nth-child(2) {
        width: 5vw;
        height: 80vw;
        left: 10vw;
        top: 5vw;
        border-radius: 0 0 5vw 5vw;
    }
    :nth-child(3) {
        width: 6vw;
        border-radius: 100vw;
        height: 6vw;
        left: 2vw;
        top: 7vw;
    }
    :nth-child(4) {
        width: 15vw;
        height: 5vw;
        right: 0;
        top: 0;
        border-radius: 5vw 0 0 0;
    }
    :nth-child(5) {
        width: 5vw;
        height: 30vw;
        right: 10vw;
        top: 5vw;
        border-radius: 0 0 5vw 5vw;
    }
    :nth-child(6) {
        width: 15vw;
        height: 5vw;
        right: 0;
        top: 37vw;
        border-radius: 5vw 0 0 5vw;
    }
    :nth-child(7) {
        width: 6vw;
        border-radius: 100vw;
        height: 6vw;
        right: 2vw;
        top: 7vw;
    }
    
}
</style>

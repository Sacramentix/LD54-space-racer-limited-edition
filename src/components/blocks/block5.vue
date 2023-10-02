<script setup lang="ts">
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';

</script>

<template>
<div game-block block-5>
    <RedElement/>
    <RedElement/>

    <RedElement/>
    <RedElement/>

    <GreenElement/>
    <GreenElement/>
    <GreenElement/>
</div>
</template>

<style lang="scss">
[block-5] {
    :nth-child(1) {
        width: 90vw;
        height: 3vw;
        left: 0;
        top: 0;;
        border-radius: 0 5vw 5vw 0;
    }
    :nth-child(2) {
        width: 45vw;
        height: 3vw;
        right: 0;
        top: 6vw;;
        border-radius: 5vw 0 0 5vw;
    }
    :nth-child(3) {
        width: 5vw;
        height: 75vw;
        left: 30vw;
        top: 15vw;
        border-radius: 5vw;
    }
    :nth-child(4) {
        width: 5vw;
        height: 75vw;
        right: 30vw;
        top: 15vw;
        border-radius: 5vw;
    }

    :nth-child(5) {
        width: 5vw;
        height: 5vw;
        right: 15vw;
        top: 60vw;
        border-radius: 5vw;
    }

    :nth-child(6) {
        width: 5vw;
        height: 5vw;
        left: 15vw;
        top: 60vw;
        border-radius: 5vw;
    }

    :nth-child(7) {
        width: 5vw;
        height: 5vw;
        right: 47.5vw;
        top: 60vw;
        border-radius: 5vw;
    }
    
}
</style>

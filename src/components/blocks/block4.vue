<script setup lang="ts">
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';

</script>

<template>
<div game-block block-4>
    <GreenElement/>
    <GreenElement/>
    <GreenElement/>
    <GreenElement/>
</div>
</template>

<style lang="scss">
[block-4] {
    :nth-child(1) {
        width: 5vw;
        height: 5vw;
        left: 5vw;
        top: 5vw;;
        border-radius: 5vw;
    }
    :nth-child(2) {
        width: 5vw;
        height: 5vw;
        right: 5vw;
        top: 5vw;;
        border-radius: 5vw;
    }
    :nth-child(3) {
        width: 5vw;
        height: 5vw;
        left: 5vw;
        bottom: 5vw;;
        border-radius: 5vw;
    }
    :nth-child(4) {
        width: 5vw;
        height: 5vw;
        right: 5vw;
        bottom: 5vw;;
        border-radius: 5vw;
    }
    
}
</style>

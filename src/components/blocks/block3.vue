<script setup lang="ts">
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';

</script>

<template>
<div game-block block-3>
    <RedElement/>
    <RedElement/>
    <GreenElement/>
</div>
</template>

<style lang="scss">
[block-3] {
    :nth-child(1) {
        width: 20vw;
        height: 5vw;
        left: 0vw;
        top: 0vw;;
        border-radius: 5vw;
        animation: slide-inline 2s linear alternate infinite;
        @keyframes slide-inline {
            0%{
                left: 0vw;
            }
            50% {
                left: 80vw;
            }
        }
    }
    :nth-child(2) {
        width: 20vw;
        height: 5vw;
        left: 0vw;
        top: 15vw;;
        border-radius: 5vw;
        animation: slide-inline 2s linear -1s alternate infinite;
        @keyframes slide-inline {
            0%{
                left: 0vw;
            }
            50% {
                left: 80vw;
            }
        }
    }
    :nth-child(3) {
        width: 20vw;
        height: 20vw;
        left: 40vw;
        top: 40vw;
        border-radius: 5vw;
    }
    
}
</style>

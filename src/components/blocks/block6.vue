<script setup lang="ts">
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';

</script>

<template>
<div game-block block-6>
    <div>
        <RedElement/>
    </div>
    <div>
        <RedElement/>
    </div>
    <div>
        <RedElement/>
    </div>
    <div>
        <RedElement/>
    </div>

    <GreenElement/>
</div>
</template>

<style lang="scss">
[block-6] {
    :nth-child(1) {
        > [red-element] {
            width: 70vw;
            height: 10vw;
            left: 0;
            top: 0;
            border-radius: 5vw;
            animation: pulse 2s step-end infinite;
        }
        animation: slide-inline 1.5s linear 0s alternate infinite;
    }
    :nth-child(2) {
        > [red-element] {
            width: 70vw;
            height: 10vw;
            left: 0;
            top: 10vw;
            border-radius: 5vw;
            animation: pulse 2.2s step-end -0.25s infinite;
        }
        animation: slide-inline 1.3s linear -0.75s alternate infinite;
    }
    :nth-child(3) {
        > [red-element] {
            width: 70vw;
            height: 10vw;
            left: 0;
            top: 20vw;
            border-radius: 5vw;
            animation: pulse 6s step-end -0.5s infinite;
        }
        animation: slide-inline 1.8s linear -0.3s alternate infinite;
    }
    :nth-child(4) {
        > [red-element] {
            width: 70vw;
            height: 10vw;
            left: 3vw;
            top: 30vw;
            border-radius: 5vw;
            animation: pulse 3s step-end -0.75s infinite;
        }
        animation: slide-inline 1s linear 0s alternate infinite;
    }

    :nth-child(5) {
        width: 5vw;
        height: 5vw;
        right: 15vw;
        top: 22.5vw;
        border-radius: 5vw;
    }


    @keyframes pulse {
        0%{
            background-color: var(--warn);
        }
        50% {
            background-color: var(--lose);
        }
    }

    @keyframes slide-inline {
        0%{
            translate: 0 0;
        }
        50% {
            translate: 70vw 0;
        }
    }

    
}
</style>

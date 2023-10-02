<script setup lang="ts">
import { ref } from 'vue';
import GreenElement from './elements/GreenElement.vue';
import RedElement from './elements/RedElement.vue';

const innerGreen = ref<InstanceType<typeof GreenElement> | null>(null);

</script>

<template>
<div game-block block-2>
    <RedElement/>
    <GreenElement ref="innerGreen" v-show="!innerGreen?.isCollected"/>
</div>
</template>

<style lang="scss">
[block-2] {
    :nth-child(1) {
        width: 33.3vw;
        height: 33.3vw;
        left: 33.3vw;
        top: 33.3vw;;
        border-radius: 5vw;
        animation: pulse 2s step-end infinite;

        @keyframes pulse {
            0%{
                background-color: var(--warn);
            }
            50% {
                background-color: var(--lose);
            }
        }
    }
    :nth-child(2) {
        width: 20vw;
        height: 20vw;
        left: 40vw;
        top: 40vw;
        border-radius: 5vw;
    }
    
}
</style>

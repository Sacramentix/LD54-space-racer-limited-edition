<script setup lang="ts">
import { ComponentOptionsMixin, DefineComponent, ExtractPropTypes } from 'vue';
import { useSeededRandom } from '../composables/random';
import { pointAmount } from '../composables/gameState';
import block0 from './blocks/block0.vue';
import block1 from './blocks/block1.vue';
import block2 from './blocks/block2.vue';
import Block3 from './blocks/block3.vue';
import Block4 from './blocks/block4.vue';
import Block5 from './blocks/block5.vue';
import Block6 from './blocks/block6.vue';
import Block7 from './blocks/block7.vue';
import Block8 from './blocks/block8.vue';

// in case we want to add a weight value for random pick
// p is the amount of green block to collect
const blocks = [
    { block: block0, p: 1 }, // 4.8s
    { block: block1, p: 2 }, // 5.8s
    { block: block2, p: 1 }, // 1.9s
    { block: Block3, p: 1 }, // 1.6s
    { block: Block4, p: 4 }, // 2.6s
    { block: Block5, p: 3 }, // 5.0s
    { block: Block6, p: 1 }, // 6.2s
    { block: Block7, p: 2 }, // 5.0s
    // { block: Block8, p: 2 },
];

type BlockComponent = DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, any, Readonly<ExtractPropTypes<{}>>, {}, {}>;

const { random }= useSeededRandom();

function pickRandomElement() {
    return blocks[Math.floor(random() * blocks.length)];
}
// const randomElement = array[Math.floor(Math.random() * array.length)];

const selectedBlocks:BlockComponent[] = [];
pointAmount.value = 0;
for (let i=0;i<10;i++) {
    const { block, p } = pickRandomElement();
    selectedBlocks.push(block);
    pointAmount.value += p;
}

</script>
<template>
<component v-for="block in selectedBlocks" :is='block'></component>
</template>
<style>
[game-block] {
    width: 100vw;
    height: 100vw;
    position: relative;
}
</style>

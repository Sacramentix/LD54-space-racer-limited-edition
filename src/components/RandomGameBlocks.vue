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
// import block2 from './blocks/block2.vue';

// in case we want to add a weight value for random pick
// p is the amount of green block to collect
const blocks = [
    { block: block0, p: 1 },
    { block: block1, p: 2 },
    { block: block2, p: 1 },
    { block: Block3, p: 1 },
    { block: Block4, p: 4 },
    { block: Block5, p: 3 },
];

type BlockComponent = DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, any, Readonly<ExtractPropTypes<{}>>, {}, {}>;

const { random }= useSeededRandom();

function pickRandomElement() {
    return blocks[Math.floor(random() * blocks.length)];
}
// const randomElement = array[Math.floor(Math.random() * array.length)];

const selectedBlocks:BlockComponent[] = [];
pointAmount.value = 0;
console.log(pointAmount.value);
for (let i=0;i<10;i++) {
    const { block, p } = pickRandomElement();
    selectedBlocks.push(block);
    console.log("i: "+i, "+"+p);
    pointAmount.value += p;
    console.log(pointAmount.value);
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

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { pointCollected } from "../../../composables/gameState";

const root = ref<HTMLElement|null>(null);

const isCollected = ref(false);

function onBlockTouch() {
    if (!isCollected.value) {
        pointCollected.value++;
        isCollected.value = true;
    }
    
}

function onEnterSimulate() {
    onBlockTouch();
}

onMounted(() => {
    if (root.value == null) return;
    root.value.addEventListener("mouseentersimulate", onEnterSimulate, {passive:false});
});
onUnmounted(() => {
    if (root.value == null) return;
    root.value.removeEventListener("mouseentersimulate", onEnterSimulate);
});

defineExpose({
    isCollected
})

</script>

<template>
<div green-element ref="root" :is-collected="isCollected" @mouseenter="onBlockTouch">
    
</div>
</template>

<style lang="scss">
[green-element] {
    position: absolute;
    background-color: var(--point);
    &[is-collected="true"] {
        background: none;
        border: 2px solid var(--point);
    }
}
</style>

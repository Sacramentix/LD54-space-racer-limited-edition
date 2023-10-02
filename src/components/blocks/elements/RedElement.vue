<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { hasLose } from "../../../composables/gameState";

const root = ref<HTMLElement|null>(null);

const mouseInBlock = ref(false);

function onBlockTouch() {
    if (!mouseInBlock.value) return;
    if (root.value == null) return;
    // console.log("block touch : ", window.getComputedStyle(root.value).backgroundColor);
    if (window.getComputedStyle(root.value).backgroundColor == "rgb(159, 19, 19)") {
        // console.log("lose : ");
        // hasLose.value = true;
    }
    requestAnimationFrame(onBlockTouch);
}


function onMouseEnter() {
    if (mouseInBlock.value) return;
    mouseInBlock.value = true;
    requestAnimationFrame(onBlockTouch);
}

function onMouseLeave() {
    mouseInBlock.value = false;
}

function onEnterSimulate() {
    onMouseEnter();
}

function onLeaveSimulate() {
    onMouseLeave();
}

onMounted(() => {
    if (root.value == null) return;
    root.value.addEventListener("mouseentersimulate", onEnterSimulate, {passive:false});
    root.value.addEventListener("mouseleavesimulate", onLeaveSimulate, {passive:false});
});
onUnmounted(() => {
    if (root.value == null) return;
    root.value.removeEventListener("mouseentersimulate", onEnterSimulate);
    root.value.removeEventListener("mouseleavesimulate", onLeaveSimulate);
});


</script>

<template>
<div red-element ref="root" @mouseenter.native="onMouseEnter" @mouseleave.native="onMouseLeave">
    
</div>
</template>

<style>
[red-element] {
    position: absolute;
    background-color: rgb(159, 19, 19);
}
</style>

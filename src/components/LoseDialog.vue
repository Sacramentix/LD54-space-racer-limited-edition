<script setup lang="ts">
import { ref, watch } from 'vue';
import { useGameState } from '../composables/gameState';
import { generateSharableSeed } from '../composables/random';

const loseDialog = ref<HTMLDialogElement | null>(null);

const {
    resetGame,
    hasLose, stop, gameKey,
    loseReason
} = useGameState();

async function restartSameSeed() {
    await resetGame();
    closeLoseDialog();
}

async function restartNewSeed() {
    await resetGame();
    closeLoseDialog();
    generateSharableSeed();
    gameKey.value++;
}

function openLoseDialog() {
    document.body.style.overflowY = "hidden";
    loseDialog.value?.showModal();
}

function closeLoseDialog() {
    document.body.style.overflowY = "scroll";
    loseDialog.value?.close();
}

watch(hasLose, (v, oldV) => {
    if (v) {
        stop();
        openLoseDialog();
    }
})

</script>
<template>
    <dialog game-lose-dialog ref="loseDialog">
        <div>
            <h2 v-if="loseReason == 'hitRedBlock'">You hit a <span red>red</span> block :(</h2>
            <h2 v-if="loseReason == 'leaveApp'">Your cursor leave the app</h2>
            <button new-seed @click="restartNewSeed">restart new seed</button>
            <button same-seed @click="restartSameSeed">restart same seed</button>
        </div>
    </dialog>
</template>
<style lang="scss">
[game-lose-dialog] {
    background: #333;
    border: none;
    border-radius: 15px;
    color: #eee;
    min-width: min(300px, 100vw);
    padding: 15px;
    position: fixed;
    inset: 0;

    >div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    h2 {
        flex-basis: 100%;
        text-align: center;
    }

    button {
        appearance: none;
        border: none;
        border-radius: 100vmax;
        font-size: 2em;
        font-weight: bolder;
        color: #000;
        padding: 8px 15px;

        &[new-seed] {
            background-color: var(--point);
        }

        &[same-seed] {
            background-color: var(--warn);
        }
    }

    &::backdrop {
        background: #fff2;
    }
}
</style>
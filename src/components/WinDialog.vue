<script setup lang="ts">
import { ref, watch } from 'vue';
import { hasWin, useGameState } from '../composables/gameState';
import { generateSharableSeed } from '../composables/random';
import { useMedals } from "../composables/scores/medalScore";

// @ts-ignore
import Bronze from "../assets/bronze.svg?skipsvgo";
// @ts-ignore
import Silver from "../assets/silver.svg?skipsvgo";
// @ts-ignore
import Gold from "../assets/gold.svg?skipsvgo";
// @ts-ignore
import Diamond from "../assets/diamond.svg?skipsvgo";

const winDialog = ref<HTMLDialogElement | null>(null);

const {
    resetGame,
    stop, gameKey,
    loseReason, timer
} = useGameState();

async function restartSameSeed() {
    await resetGame();
    closeWinDialog();
}

async function restartNewSeed() {
    await resetGame();
    closeWinDialog();
    generateSharableSeed();
    gameKey.value++;
}

function openWinDialog() {
    document.body.style.overflowY = "hidden";
    winDialog.value?.showModal();
}

function closeWinDialog() {
    document.body.style.overflowY = "scroll";
    winDialog.value?.close();
}

watch(hasWin, (v, oldV) => {
    if (v) {
        stop();
        openWinDialog();
    }
});

const { realTime , medals } = useMedals();

</script>
<template>
    <dialog game-win-dialog ref="winDialog">
        <div>
            <h2>You finish the race!</h2>
            <p>in</p>
            <p>{{ timer }}</p>
            <p v-if="realTime">Real author time from Sacramentix</p>
            <p v-else>Artificial best time based on Sacramentix best segment.</p>
            <div game-medals>
                <div :class="{'not-win': medals.bronze < timer}">
                    <Bronze/>
                    <h3>Bronze</h3>
                    <p>{{ medals.bronze }}</p>
                </div>
                <div :class="{'not-win': medals.silver < timer}">
                    <Silver/>
                    <h3>Silver</h3>
                    <p>{{ medals.silver }}</p>
                </div>
                <div :class="{'not-win': medals.gold < timer}">
                    <Gold/>
                    <h3>Gold</h3>
                    <p>{{ medals.gold }}</p>
                </div>
                <div :class="{'not-win': medals.author < timer}">
                    <Diamond/>
                    <h3 v-if="realTime">Author</h3>
                    <h3 v-else>Diamond</h3>
                    <p>{{ medals.author }}</p>
                </div>
            </div>
            <button new-seed @click="restartNewSeed">restart new seed</button>
            <button same-seed @click="restartSameSeed">restart same seed</button>
        </div>
    </dialog>
</template>
<style lang="scss">
[game-win-dialog] {
    background: #333;
    border: none;
    border-radius: 15px;
    color: #eee;
    min-width: min(300px, 100vw);
    padding: 25px;
    position: fixed;
    inset: 0;

    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
    }

    > h2, p {
        flex-basis: 100%;
        text-align: center;
    }

    h2 {
        margin-block: 15px;
        font-size: 5em;
    }

    h3 {
        text-align: center;
        font-size: 2.5em;
        margin-block: 5px;
    }

    p {
        margin: 0;
        font-size: 3em;
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

    [game-medals] {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        gap: 5px;

        > div.not-win {
            opacity: 0.6;
            filter: grayscale(0.9);
        }

        svg {
            max-width: 15vw;
            max-height: 15vw;
        }
    }

    &::backdrop {
        background: #fff2;
    }
}
</style>
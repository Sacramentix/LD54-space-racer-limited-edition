<script setup lang="ts">
import { ref, watch } from 'vue';
import RandomGameBlocks from './components/RandomGameBlocks.vue';
import LoseDialog from './components/LoseDialog.vue';
import { useGameState } from './composables/gameState';
import { useDisableContextMenu } from './composables/useDisableContextMenu';
import { useSimulateMouseMoveOnscroll } from './composables/useSimulateMouseMoveOnscroll';
import { useLoseOnWindowLeave } from './composables/useLoseOnWindowLeave';
import WinDialog from './components/WinDialog.vue';

useDisableContextMenu();
useSimulateMouseMoveOnscroll();
useLoseOnWindowLeave();

const {
    gameStarted, pointAmount, pointCollected,
    allPointCollected, startGame,
    timer, win, gameKey,
} = useGameState();

</script>

<template>
    <main>
        <div game-point-tracker>{{ pointCollected + "/" + pointAmount }}</div>
        <!-- <div class="lose">{{ hasLose ? "LOSER" : "NOT LOSER" }}</div> -->
        <div game-timer>{{ timer }}</div>
        <h1>Space Racer!</h1>
        <p>The goal is to go to the bottom of the page as fast as possible by scrolling down.</p>
        <p>You must avoid <span red>red</span> block and collect <span green>green</span> one.</p>
        <p><span yellow>Yellow</span> block become <span red>red</span> depending on time.</p>
        <p>EPILEPSIA WARNING! There is some block flashing between red and yellow.</p>
        <button start-button v-show="!gameStarted" tabindex="-1" @click="startGame();">start</button>
        <section game-scroller v-show="gameStarted">
            <!-- <Block3/> -->
            <!-- <Block2/> -->
            <RandomGameBlocks :key="gameKey" />
        </section>
        <button end-button v-show="gameStarted" tabindex="-1" :disabled="!allPointCollected" @click="win()">
            {{ allPointCollected ? "Finish! Click me!" : "You missed some green point :(" }}
        </button>
        
        <LoseDialog/>

        <WinDialog/>

    </main>
</template>
<style lang="scss">
.lose {
    position: fixed;
    top: 25px;
    left: 25px;
    font-size: 2em;
    font-weight: bold;
    z-index: 5;
}

* {
    font-family: monospace;
}

html,
body {
    padding: 0;
    margin: 0;

}

body {
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-track {
        background: rgb(111, 0, 0);
    }

    &::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 10px;
    }
}

#app {
    width: 100%;
    height: 100%;
}

main {
    background: #000;
    min-height: 100vh;
    color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    // place-items: start center;
    span[yellow],
    span[red],
    span[green] {
        font-size: 1.3em;
        font-weight: bold;
    }

    span[yellow] {
        color: var(--warn);
    }

    span[red] {
        color: var(--lose);
    }

    span[green] {
        color: var(--point);
    }

}

[game-scroller] {
    width: 100%;
    margin-top: 100vw;
    padding-bottom: 100vw;
    display: flex;
    flex-direction: column;
    gap: 10vw;
    overflow-x: hidden;
    position: relative;
}

[game-point-tracker] {
    position: fixed;
    top: 25px;
    left: 25px;
    color: var(--point);
    font-size: 2em;
    font-weight: bold;
    z-index: 5;
    pointer-events: none;
}

[game-timer] {
    position: fixed;
    top: 25px;
    right: 25px;
    font-size: 2em;
    font-weight: bold;
    z-index: 5;
    pointer-events: none;
}


[start-button] {
    appearance: none;
    margin-block: 10vw;
    border: none;
    border-radius: 100vmax;
    background-color: var(--point);
    font-size: 3em;
    font-weight: bolder;
    color: #000;
    padding: 10px 25px;
}

[end-button] {
    appearance: none;
    margin-block: 10vw;
    border: none;
    border-radius: 100vmax;
    background-color: var(--point);
    font-size: 3em;
    font-weight: bolder;
    color: #000;
    padding: 10px 25px;
}
</style>
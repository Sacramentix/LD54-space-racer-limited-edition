<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import RandomGameBlocks from './components/RandomGameBlocks.vue';
import Block2 from './components/blocks/block2.vue';
import Block3 from './components/blocks/block3.vue';
import { useGameState } from './composables/gameState';
import { useDisableContextMenu } from './composables/useDisableContextMenu';
import { useSimulateMouseMoveOnscroll } from './composables/useSimulateMouseMoveOnscroll';
import { useTimer } from './composables/useTimer';
import { seed } from './composables/random';
// useDisableContextMenu();
useSimulateMouseMoveOnscroll();

const loseDialog = ref<HTMLDialogElement | null>(null);

const { gameStarted, pointAmount, pointCollected, allPointCollected, resetGame, startGame, hasLose, timer, stop } = useGameState();


// use to force redraw all blocks
const gameKey = ref(0);

async function restartSameSeed() {
  await resetGame();
  closeLoseDialog();
  gameKey.value++;
}

async function restartNewSeed() {
  await resetGame();
  closeLoseDialog();
  gameKey.value++;
  seed.value = Math.random()+"";
}

function openLoseDialog() {
  document.body.style.overflowY = "hidden";
  loseDialog.value?.showModal();
}

function closeLoseDialog() {
  document.body.style.overflowY = "scroll";
  loseDialog.value?.close();
}

watch(hasLose, (v, oldV)=> {
  if (v) {
    stop();
    openLoseDialog();
  }
})

// onMounted(() => {
  
// });

// onUnmounted(() => {
  
// });

</script>

<template>
  <main>
    <div game-point-tracker>{{  pointCollected+"/"+pointAmount }}</div>
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
      <RandomGameBlocks :key="gameKey"/>
    </section>
    <button end-button v-show="gameStarted"  tabindex="-1" :disabled="!allPointCollected" @click="stop()">{{ allPointCollected ? "Finish! Click me!": "You missed some green point :(" }}</button>
    <dialog game-lose-dialog ref="loseDialog">
      <div>
        <h2>You hit a <span red>red</span> block :(</h2>
        <button  @click="restartNewSeed">restart new seed</button>
        <button @click="restartSameSeed">restart same seed</button>
      </div>
    </dialog>
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

html, body {
  padding: 0;
  margin: 0;

}
body {
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
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
  span[yellow], span[red], span[green] {
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
}
[game-timer] {
  position: fixed;
  top: 25px;
  right: 25px;
  font-size: 2em;
  font-weight: bold;
  z-index: 5;
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

[game-lose-dialog] {
  background: #333;
  border: none;
  border-radius: 15px;
  color: #eee;
  min-width: min(300px, 100vw);
  padding: 15px;
  position: fixed;
  inset: 0;
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  h2 {
    flex-basis: 100%;
    text-align: center;
  }
  &::backdrop {
    background: #fff2;
  }
}

</style>
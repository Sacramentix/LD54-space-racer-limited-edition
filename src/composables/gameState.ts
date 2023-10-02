import { computed, nextTick, ref } from "vue";
import { useTimer } from "./useTimer";


export const hasLose = ref(false);

export const pointCollected = ref(0);

export const pointAmount = ref(0);

export const allPointCollected = computed(() => pointCollected.value>=pointAmount.value);

const gameKey = ref(0);

export const { timer, start, stop, reset, startTimestamp } = useTimer();

export const gameStarted = computed(() => startTimestamp.value!=0);

export async function resetGame() {
    hasLose.value = false;
    pointCollected.value = 0;
    pointAmount.value = 0;
    reset();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    await wait(1000);
    hasLose.value = false;
}

export async function startGame() {
    gameKey.value++;
    await nextTick();
    start();
}


export function useGameState() {
    return {
        hasLose,
        pointCollected,
        pointAmount,
        allPointCollected,
        resetGame,
        startGame,
        gameStarted,
        timer,
        stop
    }
}

function wait(t:number) {
    return new Promise<void>((res,_)=>{
        setTimeout(res,t);
    })
}
import { computed, nextTick, ref } from "vue";
import { useTimer } from "./useTimer";


export const hasLose = ref(false);

export const hasWin= ref(false);

const LoseReasons = [
    "leaveApp",
    "hitRedBlock"
] as const;

type LoseReason = typeof LoseReasons[number];

export const loseReason = ref<LoseReason>("hitRedBlock");

export function lose(reason:LoseReason) {
    if (hasWin.value) return;
    loseReason.value = reason;
    hasLose.value = true;
}



export const pointCollected = ref(0);

export const pointAmount = ref(0);

export const allPointCollected = computed(() => pointCollected.value>=pointAmount.value);

const gameKey = ref(0);

export const { timer, start, stop, reset, startTimestamp } = useTimer();

export const gameStarted = computed(() => startTimestamp.value!=0);

export function win() {
    stop();
    hasWin.value = true;
}

export async function resetGame() {
    hasLose.value = false;
    hasWin.value = false;
    pointCollected.value = 0;
    pointAmount.value = 0;
    reset();
    window.scrollTo({
        top: 0,
        left: 0
    });
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
        stop,
        gameKey,
        loseReason,
        lose,
        hasWin,
        win
    }
}

function wait(t:number) {
    return new Promise<void>((res,_)=>{
        setTimeout(res,t);
    })
}
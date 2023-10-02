import { useTimestamp } from '@vueuse/core';
import { computed, ref } from 'vue';

export function useTimer() {

    const startTimestamp = ref(0);

    const { timestamp, pause, resume } = useTimestamp({controls: true});
    pause();

    const timer = computed(() => {
        if (startTimestamp.value == 0) return "00:00s";
        return new Date(timestamp.value - startTimestamp.value).toISOString().slice(11,23);
    });

    function start() {
        startTimestamp.value = useTimestamp().value;
        resume();
    }

    function stop() {
        pause();
    }

    function reset() {
        startTimestamp.value = 0;
    }

    return {
        startTimestamp,
        timer,
        start,
        stop,
        reset
    }


}
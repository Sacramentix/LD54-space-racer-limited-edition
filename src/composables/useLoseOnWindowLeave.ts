import { onMounted, onUnmounted } from "vue";
import { useGameState } from "./gameState";

export function useLoseOnWindowLeave() {

    const { lose } = useGameState();
    const app = document.getElementById("app")!;

    function onLeave() {
        lose("leaveApp");
    }

    onMounted(() => {
        app.addEventListener("mouseleave", onLeave, { passive: false });
    });

    onUnmounted(() => {
        app.removeEventListener("scroll", onLeave);
    });
    
}
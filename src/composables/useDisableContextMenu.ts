import { onMounted, onUnmounted } from "vue";
import { gameStarted } from "./gameState";

export function useDisableContextMenu() {
    function disableContextMenu(e:MouseEvent) {
        if(gameStarted.value) e.preventDefault();  
    }

    onMounted(() => {
      document.addEventListener("contextmenu", disableContextMenu, { passive: false });
    });

    onUnmounted(() => {
        document.removeEventListener("contextmenu", disableContextMenu);
    });
    
}
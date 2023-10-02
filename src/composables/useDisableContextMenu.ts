import { onMounted, onUnmounted } from "vue";

export function useDisableContextMenu() {
    function disableContextMenu(e:MouseEvent) {
        e.preventDefault();    
    }

    onMounted(() => {
      document.addEventListener("contextmenu", disableContextMenu, { passive: false });
    });

    onUnmounted(() => {
        document.removeEventListener("contextmenu", disableContextMenu);
    });
    
}
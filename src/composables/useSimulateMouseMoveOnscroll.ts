import { onMounted, onUnmounted } from "vue";
import { useMouse } from "@vueuse/core"

export function useSimulateMouseMoveOnscroll() {
    const { x, y } = useMouse({type: "client"});

    let lastTarget:Element | null = null;

    function onScroll(_:Event) {
        // console.log("simulate :", x.value , y.value);
        const target = document.elementFromPoint(x.value, y.value);
        // console.log(target);
        if (target == null) return;
        if (lastTarget != target) {
            lastTarget?.dispatchEvent(new CustomEvent("mouseleavesimulate"));
            target.dispatchEvent(new CustomEvent("mouseentersimulate"));
        }
        lastTarget = target;
    }

    onMounted(() => {
      window.addEventListener("scroll", onScroll, { passive: false });
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", onScroll);
    });
    
}
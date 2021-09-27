import { ref } from "@vue/runtime-dom";

const windowSize = ref(window.innerWidth);

window.addEventListener('resize', () => windowSize.value = window.innerWidth, { passive: true });

export const useWindowSize = () => {
    return { windowSize };
};
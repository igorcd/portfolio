<template>
    <div class="fixed bg-black/70 rounded-md shadow-50 border border-white/20 window transition-opacity duration-300
                max-sm:!left-0 max-sm:!top-0 max-sm:!w-screen max-sm:!h-screen max-sm:rounded-none max-sm:border-none "
         :class="[
             {'!left-0 !top-0 !w-screen !h-screen rounded-none border-none bg-black/95 !z-40': state.maximized},
             {'opacity-0 translate-y-60 scale-75 pointer-events-none': minimized},
             {'backdrop-blur-lg': !state.maximized}
         ]"
         ref="windowRef"
         @mousedown="$emit('focus')"
         :style="[
             {'z-index': index},
             { 'width': `${state.width}px`},
             { 'height': `${state.height}px`},
             { 'left': `${state.x}px`},
             { 'top': `${state.y}px`},
         ]">

        <div class="w-full h-full relative flex flex-col items-stretch px-[3px] pb-[3px]">
            <!-- Top Handler -->
            <div class="top-0 h-1 left-3 right-3 right1 absolute vertical-resize"
                 @mousedown="handlerListener($event, 'top')"></div>

            <!-- Right Handle -->
            <div class="bottom-3 top-3 right-0 w-1  absolute horizontal-resize"
                 @mousedown="handlerListener($event, 'right')"></div>

            <!-- Bottom Handle -->
            <div class="bottom-0 h-1 left-3 right-3 right1  absolute vertical-resize"
                 @mousedown="handlerListener($event, 'bottom')"></div>

            <!-- Left Handle -->
            <div class="bottom-3 top-3 left-0 w-1  absolute horizontal-resize"
                 @mousedown="handlerListener($event, 'left')"></div>

            <!-- Top Right Handler -->
            <div class="right-0 top-0 w-1.5 h-1.5 absolute top-right-resize"
                 @mousedown="handlerListener($event, 'top-right')"></div>

            <!-- top left Handler -->
            <div class="right-0 bottom-0 w-1.5 h-1.5 absolute bottom-right-resize"
                 @mousedown="handlerListener($event, 'bottom-right')"></div>

            <!-- top left Handler -->
            <div class="left-0 top-0 w-1.5 h-1.5 absolute bottom-right-resize"
                 @mousedown="handlerListener($event, 'top-left')"></div>

            <!-- bottom left Handler -->
            <div class="left-0 bottom-0 w-1.5 h-1.5 absolute top-right-resize"
                 @mousedown="handlerListener($event, 'bottom-left')"></div>

            <header class="h-0 sm:h-7 flex items-center justify-end "
                    @mousedown="handlerListener($event, 'header')">
                <WindowControl @maximize="$emit('update:maximized', true)"
                               @close="$emit('close')"
                               @minimize="$emit('update:minimized', true)"
                               v-if="!maximized"
                               class="max-sm:hidden"/>
            </header>

            
            <iframe :src="url" class="w-full h-full rounded-md flex-1 " 
                    ref="iframeRef"
                    :class="{'pointer-events-none': state.resizing}"></iframe>

        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref, watch } from 'vue';
import WindowControl from './WindowControl.vue';

type Handlers = 'top' | 'right' | 'left' | 'bottom' | 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' | 'header';

const Window = defineComponent({
    components: { WindowControl },
    props: {
        index: {
            type: Number,
            required: true
        },
        maximized: {
            type: Boolean,
            required: true
        },
        minimized: {
            type: Boolean,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        const windowRef = ref<HTMLDivElement | null>(null);
        const iframeRef = ref<HTMLIFrameElement | null>(null);

        const state = reactive({
            resizing: false,
            maximized: props.maximized,
            width: window.innerWidth <= 1536 ? 700 : 870,
            height: window.innerWidth <= 1536 ? 400 : 520,
            x: 100 + (15 * props.index),
            y: 100  + (15 * props.index)
        });

        let initialWindowPosition = {
            width: state.width,
            height: state.height,
            x: state.x,
            y: state.y
        };

        let initialCursorPosition = [0,0];

        /** Handler superior */
        const topHandlerListener = (y: number) => {
            requestAnimationFrame(() => {

                // Valor entre 28 e tamanho janela - 350
                const maxCursorPosition = Math.min((initialWindowPosition.y + initialWindowPosition.height) - 350, y);
                const yAxisDiference = Math.max(28, maxCursorPosition) - initialCursorPosition[1];

                // Setar os valores
                state.y = initialWindowPosition.y + yAxisDiference;
                state.height = initialWindowPosition.height - yAxisDiference;
            });
        };

        /** Handler inferior */
        const bottomHandlerListener = (y: number) => {
            requestAnimationFrame(() => {
                const yAxisDiference = Math.min(window.innerHeight, y) - initialCursorPosition[1];
                state.height = Math.max(350, initialWindowPosition.height + yAxisDiference);
            });
        };

        /** Handler da direita */
        const rightHandlerListener = (x: number) => {
            requestAnimationFrame(() => {
                const xAxisDiference = Math.min(window.innerWidth, x) - initialCursorPosition[0];
                state.width = Math.max(initialWindowPosition.width + xAxisDiference, 350);
            });
        };

        /** Handler da esquerda */
        const leftHandlerListener = (x: number) => {
            requestAnimationFrame(() => {
                // Valor Maior que zero e menor que o tamanho da largura menos 350
                const maxCursorPosition = Math.min((initialWindowPosition.x + initialWindowPosition.width) - 350, x);
                const xAxisDiference = Math.max(0, maxCursorPosition) - initialCursorPosition[0];

                state.x = initialWindowPosition.x + xAxisDiference;
                state.width = initialWindowPosition.width - xAxisDiference;
            });
        };


        /** Handler do header */
        const headerHandlerListener = (e: MouseEvent) => {
            requestAnimationFrame(() => {
                const diference = [e.x - initialCursorPosition[0], e.y - initialCursorPosition[1]];
                state.x = initialWindowPosition.x + diference[0];
                state.y = initialWindowPosition.y + diference[1];
            });
        };

        /** Tratar resize da janela */
        const handlerListener = (e: MouseEvent, handler: Handlers) => {
            e.preventDefault();

            if(!props.maximized) {
                state.resizing = true;

                // Setar posição inicial
                initialCursorPosition = [e.x, e.y];
                initialWindowPosition = { ...state };

                let bodyClass = '';
                let callback: (e: MouseEvent) => void;

                switch (handler) {
                    case 'top':
                        callback = (e) => topHandlerListener(e.y);
                        bodyClass = 'vertical-resize';
                        break;

                    case 'right':
                        callback = (e) => rightHandlerListener(e.x);
                        bodyClass = 'horizontal-resize';
                        break;

                    case 'bottom':
                        callback = (e) => bottomHandlerListener(e.y);
                        bodyClass = 'vertical-resize';
                        break;

                    case 'left':
                        callback = (e) => leftHandlerListener(e.x);
                        bodyClass = 'horizontal-resize';
                        break;

                    case 'top-right':
                        callback = (e) => {
                            topHandlerListener(e.y);
                            rightHandlerListener(e.x);
                        };
                        bodyClass = 'top-right-resize';
                        break;

                    case 'bottom-right':
                        callback = (e) => {
                            bottomHandlerListener(e.y);
                            rightHandlerListener(e.x);
                        };
                        bodyClass = 'bottom-right-resize';
                        break;

                    case 'top-left':
                        callback = (e) => {
                            topHandlerListener(e.y);
                            leftHandlerListener(e.x);
                        };
                        bodyClass = 'bottom-right-resize';
                        break;

                    case 'bottom-left':
                        callback = (e) => {
                            bottomHandlerListener(e.y);
                            leftHandlerListener(e.x);
                        };
                        bodyClass = 'top-right-resize';
                        break;
                
                    case 'header':
                        callback = headerHandlerListener;
                        break;
                }

                // Adicionar listener para a callback
                if(bodyClass) {
                    document.body.classList.add(bodyClass);
                }

                window.addEventListener('mousemove', callback!);

                // Tratar evento de quando para de redimensionar
                window.addEventListener('mouseup', () => {
                    window.removeEventListener('mousemove', callback), { once: true };
                    if(bodyClass) {
                        document.body.classList.remove(bodyClass);
                        bodyClass = '';
                    }
                    state.resizing = false;
                });
            }
        };

        watch(() => props.maximized, (maximized) => {
            const el = windowRef.value!;
            el.classList.add('opacity-0');
            el.classList.add('scale-75');

            setTimeout(() => {
                state.maximized = maximized;
                el.classList.remove('opacity-0');
                el.classList.remove('scale-75');
            }, 150);
        });

        onMounted(() => {
            iframeRef.value?.contentWindow?.addEventListener('mousedown', () => context.emit('focus'));
        });


        return { state, bottomHandlerListener, handlerListener, windowRef, iframeRef };
    }
});

export default Window;
</script>

<style>
.window {
    transition: opacity 150ms, transform 150ms;
}

@keyframes maximize {
    0% { opacity: 0; transform: scale(.7) }
}
</style>
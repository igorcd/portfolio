<template>

    <button class="app-button group"
            :class="{'-translate-y-1 scale-105 sm:scale-110]': focused}">
        
        <div class="absolute bottom-[calc(100%+20px)] opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block">
            <div class="bg-black/80 rounded-lg px-4 text-white py-2 text-sm font-semibold">
                {{ app.name }}
            </div>
        </div>

        <!-- Borda -->
        <div class="w-12 h-12 p-0.5  rounded-full  transition-opacity duration-300 absolute bg-gradient-to-b from-gray-800 to-white bottom-0 right-0"
             :class="{'opacity-0': !opened}">
        </div>

        <!-- Conteúdo -->
        <div class="w-full h-full rounded-full bg-center flex items-center justify-center bg-cover  cursor-pointer relative"
             @click="$emit('pressed')"
             :style="style"
             style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25)">


            <!-- Brilhos -->
            <div class="absolute rounded-b-full w-full h-1/2  bottom-0 bg-gradient-to-t from-white/30 to-white/0 transition-opacity duration-300"
                 :class="{'opacity-0 scale-50': !opened}"></div>

            <div class="absolute w-8 h-8 rounded-full bg-gradient-to-b from-white/30 to-white/0 transition-opacity duration-300" 
                 style="transform: rotateX(60deg); top: -9px"
                 :class="{'opacity-0 scale-50': !opened}"></div>

            <!-- Mascara -->
            <div class="w-full h-full transition-opacity duration-300 rounded-full bg-white/30 absolute top-0 right-0 group-active:opacity-100 opacity-0"></div>
        </div>

    </button>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, PropType } from 'vue';
import AppModel from '../models/AppModel';

const AppButton = defineComponent({
    props: {
        app: {
            type: Object as PropType<AppModel>,
            required: true
        },
        opened: {
            type: Boolean,
            required: true
        },
        focused: {
            type: Boolean,
            required: true
        },
    },
    setup(props) {
        const style = computed(() => {
            return {
                'background-image': `url('${props.app.icon}')`,
                'background-color': props.app.foregroundColor
            };
        });

        onMounted(() => {
            document.querySelector("#task-bar")!.scrollLeft = 9999;
        });

        return { style };
    }
});

export default AppButton;
</script>

<style>
</style>
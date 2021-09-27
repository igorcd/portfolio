<template>

    <button class="w-12 h-12 p-0.5 origin-bottom transition-all duration-300 relative active:scale-125 hover:scale-110 group"
            :class="{'-translate-y-1 scale-110]': focused}">

        <!-- Borda -->
        <div class="w-12 h-12 p-0.5  rounded-full  transition-opacity duration-300 absolute bg-gradient-to-b from-gray-800 to-white bottom-0 right-0"
             :class="{'opacity-0': !opened}">
        </div>

        <!-- Conteúdo -->
        <div class="w-full h-full rounded-full bg-center flex items-center justify-center bg-cover bg-gray-50  cursor-pointer relative"
             @click="$emit('pressed')"
             :style="{'background-image': `url('${app.icon}')`}"
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
import { defineComponent, PropType } from 'vue';
import AppDTO from '../dtos/AppDTO';

const AppButton = defineComponent({
    props: {
        app: {
            type: Object as PropType<AppDTO>,
            required: true
        },
        opened: {
            type: Boolean,
            required: true
        },
        focused: {
            type: Boolean,
            required: true
        }
    }
});

export default AppButton;
</script>

<style>

</style>
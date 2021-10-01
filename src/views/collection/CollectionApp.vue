<template>
    <div class="text-center w-full hover:bg-white/10 py-2 px-2 rounded-xl group cursor-pointer" >

        <div class="w-14 h-14 md:w-18 md:h-18 rounded-full  mx-auto mb-3 bg-center bg-cover relative flex justify-center transition-all duration-300 shadow-200 group-hover:shadow-300 group-hover:scale-105 origin-bottom"
             :style="{'background-color': app.foregroundColor, 'background-image': `url('${app.icon}')`}">
                     
            <!-- Brilhos -->
            <div class="absolute rounded-b-full w-full h-1/2  bottom-0 bg-gradient-to-t from-white/30 to-white/0"></div>

            <div class="absolute top-[-6px] md:top-[-9px] w-8 h-8 md:w-11 md:h-11 rounded-full bg-gradient-to-b from-white/30 to-white/0" 
                 style="transform: rotateX(60deg);"></div>
        </div>

        <Text class="whitespace-nowrap overflow-hidden overflow-ellipsis">{{ app.name }}</Text>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeUnmount, onMounted, PropType } from 'vue';
import AppDTO from '../../dtos/AppDTO';
import { Text } from '../../components';

const CollectionApp = defineComponent({
    components: { Text },
    props: {
        app: {
            type: Object as PropType<AppDTO>,
            required: true
        }
    },
    setup() {
        onMounted(() => {
            document.querySelector('body')!.classList.add('lock-scroll');
        });

        onBeforeUnmount(() => {
            document.querySelector('body')!.classList.remove('lock-scroll');
        });
    }
});

export default CollectionApp;
</script>

<style>

</style>
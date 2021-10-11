<template>
    <div class="relative">
        <!-- Sombra -->
        <img alt="Sombra do ícone" src="/img/hexagon.svg" class="hexagon-shadow w-18 h-18"/>

        <div class="w-18 h-18 p-0.5 hexagon absolute top-0 left-0" style="background: #303030">
            <div class="w-full h-full hexagon flex items-center justify-center"
                 style="background: linear-gradient(188.85deg, #0C0C0C 17.91%, #282828 97.55%)">

                <!-- Gradiente -->
                <div class="w-full h-full opacity-0  transition-opacity duration-300"
                     :class="{'opacity-100': selected}"
                     :style="`background: linear-gradient(188.85deg, ${colors[0]} 17.91%, ${colors[1]} 97.55%)`"></div>

                <!-- Ícone -->
                <Icon size="2.5rem" :icon="icon" class="absolute"/>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

const Hexagon = defineComponent({
    components: { Icon },
    props: {
        colors: {
            type: Array,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            required: true
        }
    }
});

export default Hexagon;
</script>

<style>
.hexagon {
    mask-image: url('/img/hexagon.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
}
.hexagon-shadow {
      filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
}
</style>
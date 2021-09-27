<template>
    <IconsSprite/>
    <FrameworksSprite/>
    <MenusSprite/>
    <RouterView />
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import IconsSprite from './components/sprites/IconsSprite.vue';
import MenusSprite from './components/sprites/MenusSprite.vue';
import FrameworksSprite from './components/sprites/FrameworksSprite.vue';

const App = defineComponent({
    components: { IconsSprite, MenusSprite, FrameworksSprite },
});

export default App;
</script>

<style>
</style>
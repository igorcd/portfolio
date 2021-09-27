<template>
    <div class="h-10 sm:!h-7 fixed transition-all duration-300  z-50
                top-3 sm:top-0 w-[calc(100%-1.5rem)] sm:w-[calc(100%-4.5rem)] left-3 sm:left-9
                rounded-full sm:rounded-t-none sm:rounded-b-[1.25rem]
                bg-black/80 shadow-100"
         :class="{'!w-12': state.menuOpened}"
         :style="{'height': state.menuOpened ? `${((menus.length + 1) * 50) + 50}px`: '2.5rem'}">

        <div class="flex items-center relative w-[calc(100vw-1.5rem)] sm:w-full h-10 sm:h-7">

            <div class="px-1 sm:hidden transition-transform duration-300" :class="{'translate-y-1.5 -rotate-90': state.menuOpened}">
                <IconButton icon="menu" color="white" size="1.75rem" @click="state.menuOpened = !state.menuOpened"/>
            </div>

            <!-- Logo -->
            <div class="flex items-center absolute sm:static left-1/2 -translate-x-1/2 sm:translate-x-0 px-4 sm:pr-0 sm:!opacity-100 transition-opacity duration-300" :class="{'opacity-0': state.menuOpened}">
                <img :src="focusedApp.favicon" class="w-6 sm:w-4"/>
                <p class="text-sm sm:text-[0.75rem] text-white font-bold mx-1.5">{{ focusedApp.name }}</p>
                <Divider type="vertical" class="hidden sm:block"/>
            </div>

            
            <!-- Menu -->
            <div class="text-white absolute sm:static left-1 top-11 transition-opacity duration-300 sm:!opacity-100" :class="{'opacity-0': !state.menuOpened}">
                <Menu :menus="menus" :ref="focusedApp.ref"/>
                <div class="flex flex-col items-center sm:hidden">
                    <Divider/>
                    <IconButton icon="close" color="white" size="1.75rem" @click="closeApp"/>
                </div>
            </div>

            <div class="flex-1"></div>

            <div class="items-center hidden sm:flex">
                <!-- Idioma -->
                <Divider type="vertical"/>
                <button class="hover:bg-white/20 px-3 py-0.5 mr-0.5 rounded-sm font-bold text-white text-xs cursor-pointer">
                    POR
                </button>
                <Divider type="vertical"/>
            </div>

            <!-- Relógio -->
            <Clock class="mr-6 ml-2 sm:!opacity-100 transition-opacity duration-300" :class="{'opacity-0': state.menuOpened}"/>
            <div id="appControls" v-if="hasMaximizedApp" class="hidden sm:flex items-center">
                <Divider type="vertical"/>
                <WindowControl @maximize="vm.restoreAppSize()" @minimize="vm.minimizeCurrentApp()"/>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive } from 'vue';
import { WindowControl, Divider, Menu, Clock, Icon, IconButton } from '../components';
import vm from '../viewModels/AppsViewModel';

const StatusBar = defineComponent({
    components: { WindowControl, Divider, Menu, Clock, Icon, IconButton },
    setup() {

        const state = reactive({
            menuOpened: false
        });

        const focusedApp = computed(() => vm.focusedApp);
        const menus = computed(() => vm.menus);
        const hasMaximizedApp = computed(() => vm.hasMaximizedApp);

        const closeApp = () => {
            state.menuOpened = false;
            vm.closeCurrentApp();
        };

        return { focusedApp, hasMaximizedApp, vm, menus, state, closeApp };
    }
});

export default StatusBar;
</script>

<style>

</style>
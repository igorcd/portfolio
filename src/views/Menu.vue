<template>
    <div class="flex flex-col lg:flex-row items-center" v-click-out="() => state.selectedMenu = ''">

        <!-- Menu -->
        <div class="hover:bg-white/20 px-1.5 lg:px-3 py-1.5 lg:py-0.5 mt-3 lg:mt-0 lg:mr-0.5 rounded-sm font-light select-none relative"
             :class="{'bg-white/20': state.selectedMenu == menu.title}"
             v-for="menu in focusedApp.menus" :key="menu.title"
             @click="state.selectedMenu = menu.title"
             @mouseover="state.selectedMenu.length > 0 ? state.selectedMenu = menu.title : null">

            <!-- Título do menu -->
            <p class="text-xs text-white hidden lg:block">{{ menu.title }}</p>
            <Icon :icon="menu.icon" color="white" class="lg:hidden" size="1.5rem"/>

            <!-- Submenus -->
            <div style="perspective: 400px" class="left-[calc(100%+7px)] lg:left-0 top-0 lg:top-[calc(100%+7px)] absolute">
                <transition name="menu">
                    <div class=" origin-center  bg-black/80 py-1 rounded-md shadow-50 border border-white/20 min-w-[12rem] "
                         v-if="state.selectedMenu == menu.title">

                        <!-- Submenu -->
                        <div class="hover:bg-white/20 cursor-pointer px-3 py-2 text-white text-xs  last:border-0"
                             v-for="option in menu.options" :key="option.title"
                             @click.stop="selectMenu(option)">
                            {{ option.title }}
                        </div>
                    </div>
                </transition>
            </div>
        </div>

    </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue';
import clickOut from '../directives/clickOut';
import vm from '../viewModels/AppsViewModel';
// Componentes
import Icon from '../components/Icon.vue';

import Option from '../models/OptionModel';
import AppModel from '../models/AppModel';
const Menu = defineComponent({
    components: { Icon },
    props: {
        focusedApp: {
            type: Object as PropType<AppModel>,
            required: true
        }
    },
    directives: { 'click-out': clickOut },
    setup(){7;
        const state = reactive({
            selectedMenu: ''
        });

        const selectMenu = (option: Option) => {
            state.selectedMenu = '';
            const action = Function("return " + option.action)();
            action(vm);
        };

        return { state, selectMenu };
    }
});

export default Menu;
</script>

<style>

</style>
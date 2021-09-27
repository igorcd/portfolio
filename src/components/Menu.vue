<template>
    <div class="flex flex-col sm:flex-row items-center" v-click-out="() => state.selectedMenu = ''">

        <!-- Menu -->
        <div class="hover:bg-white/20 px-1.5 sm:px-3 py-1.5 sm:py-0.5 mt-3 sm:mt-0 sm:mr-0.5 rounded-sm font-light select-none relative"
             :class="{'bg-white/20': state.selectedMenu == menu.title}"
             v-for="menu in menus" :key="menu.title"
             @click="state.selectedMenu = menu.title"
             @mouseover="state.selectedMenu.length > 0 ? state.selectedMenu = menu.title : null">

            <!-- Título do menu -->
            <p class="text-xs text-white hidden sm:block">{{ menu.title }}</p>
            <Icon :icon="menu.icon" color="white" class="sm:hidden" size="1.5rem"/>

            <!-- Submenus -->
            <div style="perspective: 400px" class="left-[calc(100%+7px)] sm:left-0 top-0 sm:top-[calc(100%+7px)] absolute">
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
import { defineComponent, PropType, reactive, Ref } from 'vue';
import Icon from './Icon.vue';

import clickOut from '../directives/clickOut';
import MenuItem from '../interfaces/MenuItem';
import Option from '../interfaces/Option';
import WindowRef from '../interfaces/WindowRef';
const Menu = defineComponent({
    components: { Icon },
    props: {
        menus: {
            type: Array as PropType<MenuItem[]>,
            required: true
        },
        ref: {
            type: Object as PropType<Ref<WindowRef>>
        }
    },
    directives: { 'click-out': clickOut },
    setup(props){7;
        const state = reactive({
            selectedMenu: ''
        });

        const selectMenu = (option: Option) => {
            state.selectedMenu = '';
            option.action(props.ref);
        };

        return { state, selectMenu };
    }
});

export default Menu;
</script>

<style>

</style>
<template>
    <div class="pb-24">
        <header class="h-64 xl:h-96 2xl:h-[30rem] relative flex items-center justify-center bg-neutral-900">

            <!-- Background -->
            <div class="w-full h-full bg-center bg-no-repeat bg-cover opacity-30"
                 :style="{'background-image': `url('${app.meta.header.image}')`}"></div>

            <!-- Logo -->
            <img :src="app.meta.logo"
                 alt="Logo do aplicativo"
                 class="h-9 sm:h-12 xl:h-14 2xl:h-16 absolute"/>

            <a :href="app.meta.header.source" target="_blank" class="absolute bottom-8 right-4 text-[0.65rem] text-white/60">Foto por {{ app.meta.header.author }}</a>

            <div class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-neutral-900"></div>
        </header>

        <div class="bg-neutral-900 relative">
            <Container class="pt-5">

                <!-- Sobre -->
                <TagContainer tag="h1" class="mb-4">
                    <Text type="headline3">Sobre o sistema</Text>
                </TagContainer>

                <TagContainer tag="p" class="mb-6">
                    <Text>{{ app.meta.description.pt }}</Text>
                </TagContainer>

                <!-- Links -->
                <div class="flex flex-col sm:flex-row items-center pl-3.5">
                    
                    <!-- Google Play -->
                    <template v-if="app.meta.urls.googlePlay">
                        <a :href="app.meta.urls.googlePlay" target="_blank">
                            <Button type="hollow">
                                <Icon icon="googlePlay" color="white" size="1.5rem" class="mr-2"/>
                                <p class="text-white text-sm">Google Play</p>
                            </Button>
                        </a>
                        <Divider type="vertical" class="h-9 hidden sm:block"/>
                    </template>


                    <!-- App Store -->
                    <template v-if="app.meta.urls.appStore">
                        <a :href="app.meta.urls.appStore" target="_blank">
                            <Button type="hollow">
                                <Icon icon="apple" color="white" size="1.5rem" class="mr-2"/>
                                <p class="text-white text-sm">App Store</p>
                            </Button>

                        </a>
                        <Divider type="vertical" class="h-9 hidden sm:block"/>
                    </template>


                    <!-- Web -->
                    <a v-if="app.meta.urls.website" :href="app.meta.urls.website" target="_blank">
                        <Button type="hollow">
                            <Icon icon="globe" color="white" size="1.5rem" class="mr-2"/>
                            <p class="text-white text-sm">Website</p>
                        </Button>

                    </a>
                </div>

                <Divider class="my-6"/>

                <!-- Ficha técnica -->
                <TagContainer tag="h1" class="mb-4">
                    <Text type="headline3">Ficha técnica</Text>
                </TagContainer>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-6 pl-8">
                    <!-- Função -->
                    <div>
                        <Text type="title" class="mb-1">Função</Text>
                        <Text type="subtitle">{{ app.meta.role.pt }}</Text>
                    </div>

                    <!-- Tecnologias utilizadas -->
                    <div>
                        <Text type="title" class="mb-1">Tecnologias utilizadas</Text>
                        <div class="flex items-center space-x-1 opacity-50">
                            <Icon :icon="framework" color="white" size="1.5rem" v-for="(framework, index) in app.meta.tecnologies" :key="index"/>
                        </div>
                    </div>

                    <!-- Proprietário -->
                    <div>
                        <Text type="title" class="mb-1">Proprietário</Text>
                        <Text type="subtitle">{{ app.meta.company }}</Text>
                    </div>

                    <!-- Periodo -->
                    <div>
                        <Text type="title" class="mb-1">Período</Text>
                        <Text type="subtitle">{{ app.meta.year }}</Text>
                    </div>

                    <!-- Plataformas -->
                    <div>
                        <Text type="title" class="mb-1">Plataformas</Text>
                        <div class="flex items-center space-x-1 opacity-50">
                            <Icon icon="desktop" color="white" size="1.5rem" v-if="app.meta.platforms.desktop"/>
                            <Icon icon="tablet" color="white" size="1.5rem" v-if="app.meta.platforms.tablet"/>
                            <Icon icon="smartphone" color="white" size="1.5rem" v-if="app.meta.platforms.phone"/>
                            <Icon icon="globe" color="white" size="1.5rem" v-if="app.meta.platforms.web"/>
                        </div>
                    </div>
                </div>

                <Divider class="my-6"/>

                <!-- Capturas de tela -->
                <TagContainer tag="h1" class="mb-2">
                    <Text type="headline3">Capturas de tela</Text>
                </TagContainer>
                
                <div class="flex items-center space-x-0.5 px-7">
                    <IconButton icon="desktop"
                                class="w-10 h-10 opacity-50" 
                                v-if="app.meta.pictures.xl.length > 0"
                                color="white"
                                size="1.75rem"
                                :class="{'opacity-100': state.deviceSize == 'xl'}"
                                @click="state.deviceSize = 'xl'"/>

                    <IconButton icon="tabletLandscape"
                                class="w-10 h-10 opacity-50" color="white"
                                :class="{'opacity-100': state.deviceSize == 'lg'}"
                                size="1.75rem"
                                v-if="app.meta.pictures.lg.length > 0"
                                @click="state.deviceSize = 'lg'"/>

                    <IconButton icon="tablet" 
                                class="w-10 h-10 opacity-50" color="white"
                                :class="{'opacity-100': state.deviceSize == 'md'}"
                                size="1.75rem"
                                v-if="app.meta.pictures.md.length > 0"
                                @click="state.deviceSize = 'md'"/>

                    <IconButton icon="smartphone"
                                class="w-10 h-10 opacity-50"
                                :class="{'opacity-100': state.deviceSize == 'sm'}"
                                color="white" 
                                size="1.5rem"
                                v-if="app.meta.pictures.sm.length > 0"
                                @click="state.deviceSize = 'sm'"/>
                </div>
            </Container>

            <div class="z-[-1] absolute top-full left-0 w-full h-32 bg-gradient-to-b from-neutral-900 to-transparent"></div>
        </div>

        <Container>
            
            <Carousel v-if="state.deviceSize == 'sm'">
                <img class="inline-block h-56 mr-4 cursor-pointer hover:scale-105 transition-transform duration-150 rounded"
                     alt="Imagem do aplicativo no tamanho SM"
                     v-for="img in app.meta.pictures.sm" :key="img" :src="img"
                     @click="selectImage(img)"/>
            </Carousel>
                
            <Carousel v-else-if="state.deviceSize == 'md'">
                <img class="inline-block h-56 mr-4 cursor-pointer hover:scale-105 transition-transform duration-150 rounded"
                     alt="Imagem do aplicativo no tamanho MD"
                     v-for="img in app.meta.pictures.md" :key="img" :src="img"
                     @click="selectImage(img)"/>
            </Carousel>
                
            <Carousel v-else-if="state.deviceSize == 'lg'">
                <img class="inline-block h-40 mr-4 cursor-pointer hover:scale-105 transition-transform duration-150 rounded"
                     alt="Imagem do aplicativo no tamanho LG"
                     v-for="img in app.meta.pictures.lg" :key="img" :src="img"
                     @click="selectImage(img)"/>
            </Carousel>

            <Carousel v-else>
                <img class="inline-block h-36 mr-4 cursor-pointer hover:scale-105 transition-transform duration-150 rounded"
                     alt="Imagem do aplicativo no tamanho XL"
                     v-for="img in app.meta.pictures.xl" :key="img" :src="img"
                     @click="selectImage(img)"/>
            </Carousel>

            <Divider class="my-6"/>

            <!-- Outros sistemas -->
            <TagContainer tag="h1" class="mb-4">
                <Text type="headline3">Outros sistemas</Text>
            </TagContainer>

            <div class="flex items-center space-x-4 px-8">
                <div class="w-12 h-12 rounded-full bg-gray-500" v-for="app in relatedApps" :key="app.name"></div>
            </div>
        </Container>
    
        <!-- Imagem -->
        <transition name="fade">
            <div class="fixed top-0 left-0 w-full h-screen bg-black/70 flex items-center z-50" v-if="state.imageOpened" @click.self="state.imageOpened = false">

                <img alt="Detalhe da imagem selecionada"
                     class="w-[calc(100%-16px)] h-[calc(100%-30px)] mx-auto object-contain" 
                     :src="state.selectedImage"/>

                <button class="w-10 h-10 bg-black/12 flex items-center justify-center absolute top-4 left-4" @click="state.imageOpened = false">
                    <Icon icon="times" color="white" size="1.5rem"/>
                </button>
            </div>
        </transition>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { Container, Text, TagContainer, Button, Icon, Divider, IconButton, Carousel } from '../../components';
import apps from '../../data/apps';

interface GenericAppState {
    deviceSize: 'sm' | 'md' | 'lg' | 'xl',
    selectedImage: string;
    imageOpened: boolean;
}

const UnderDevelopment = defineComponent({
    components: { Container, Text, TagContainer, Button, Icon, IconButton, Divider, Carousel },
    setup() {
        
        // Hooks
        const { name } = useRoute();

        // Variáveis computadas
        const app = computed(() => apps.find(el => el.name == name));

        /** Pegar o tamanho de tela default */
        const getDefaultScreenSize = () => {
            if(app.value!.meta.pictures.xl.length > 0) {
                return "xl";
            }
            else if(app.value!.meta.pictures.lg.length > 0) {
                return "lg";
            }
            else if(app.value!.meta.pictures.md.length > 0) {
                return "md";
            }
            else {
                return "sm";
            }
        };

        // Estado
        const state = reactive<GenericAppState>({
            deviceSize: getDefaultScreenSize(),
            selectedImage: "",
            imageOpened: false,
        });

        // Variáveis computadas

        /** Aplicativos relacionados */
        const relatedApps = computed(() => apps.filter(el => app.value?.meta.relatedApps.includes(el.name))) || [];

        // Métodos
        const selectImage = (url: string) => {
            state.imageOpened = true;
            state.selectedImage = url;
        };

        return { state, app, relatedApps, selectImage };
    }
});

export default UnderDevelopment;
</script>

<style>

</style>
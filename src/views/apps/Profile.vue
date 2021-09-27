<template>
    <div class="profile-app">

        <!-- Header -->
            
        <div class="relative">
            <Container class="flex items-start pb-7 relative z-10">
                <div class="flex-1 pt-4 pr-8">
                    <Text type="body2" class="mb-1">Olá, meu nome é</Text>
                    <Text type="headline1" class="mb-1">Igor Dantas</Text>
                    <Text type="headline2" class="mb-6">Desenvolvedor de sistemas</Text>

                    <Divider class="mb-3"/>

                    <Text class="mb-6">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</Text>

                    <div class="flex items-center space-x-2">
                        <IconButton icon="github" color="white" size="1.75rem"/>
                        <IconButton icon="linkedin" color="white" size="1.75rem"/>
                    </div>
                </div>
                
                <!-- Avatar -->
                <img :src="profile"
                     class="w-52"/>
            </Container>

            <!-- Gradiente -->
            <div class="absolute h-16 bg-gradient-to-b from-transparent to-neutral-900 bottom-0 left-0 w-full"></div>

        </div>

        <div class="bg-neutral-900">
            <Container>
                <TagContainer tag="h1" class="mb-4">
                    <Text type="headline3">Muito bem-vindo</Text>
                </TagContainer>

                <TagContainer tag="p">
                    <Text>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                    </Text>
                </TagContainer>

                <Divider class="my-10"/>

                <TagContainer tag="h1" class="mb-4">
                    <Text type="headline3">Experiência técnica</Text>
                </TagContainer>

                <div class="flex justify-center flex-wrap mx-auto mb-6" 
                     :style="{'max-width': (5 * 5) + 'rem'}">
                    <Hexagon v-for="framework in frameworks"
                             :key="framework.title"
                             class="mx-1"
                             :colors="framework.colors"
                             :icon="framework.icon"/>
                </div>

                <div class="text-center mx-auto max-w-md ">
                    <Text type="headline2" class="mb-4">
                        Vue.js
                    </Text>
                    <Text>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC Contrary to popular belief,
                    </Text>
                </div>
                <Divider class="mt-10 mb-6"/>
            </Container>    

            <!-- Gradiente -->
            <div class="absolute h-16 bg-gradient-to-b to-transparent from-neutral-900 top-fiull left-0 w-full"></div>        
        </div>
        

        <Container>
            <TagContainer tag="h1" class="mb-4">
                <Text type="headline3">Últimos trabalhos</Text>
            </TagContainer>
            <Timeline/>
        </Container>

    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import frameworks from '../../mocks/frameworks';
import { profile } from '../../assets/img';
import { Divider, IconButton, Container, TagContainer, Hexagon, Text, Timeline } from '../../components';

const Profile = defineComponent({
    components: { Divider, IconButton, Container, TagContainer, Hexagon, Text, Timeline },
    setup() {
        return { profile, frameworks };
    }
});

export default Profile;
</script>

<style>
</style>
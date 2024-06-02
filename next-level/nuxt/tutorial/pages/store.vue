<template>
    <div>
        <h2>Store Page</h2>
        <p>
            {{ currentHuman.name }} with an id of {{ currentHuman.id }} is
            selected.
        </p>
        <hr />
        <h3>Update Selected Human</h3>
        <div>
            <label for="id">ID&nbsp;</label
            ><input type="text" name="id" id="id" v-model.trim="inputHuman.id"/>
        </div>
        <div>
            <label for="name">Name&nbsp;</label
            ><input type="text" name="name" id="name" v-model.trim="inputHuman.name" />
        </div>
        <button @click="useHuman.updateCurrentHuman(inputHuman)">Update Current Human</button>
        <p>Current: {{ currentHuman }}</p>
        <p>Input: {{ inputHuman }}</p>
        <hr />
        <h3>References</h3>
        <p>
            <NuxtLink
                to="https://nuxt.com/docs/getting-started/state-management#usage-with-pinia"
                target="_blank"
                >Nuxt's Guide on State Mangement with Pinia</NuxtLink
            >
        </p>
        <p>
            <NuxtLink to="https://pinia.vuejs.org/ssr/nuxt.html" target="_blank"
                >Pinia's Guide on Nuxt.js</NuxtLink
            >
        </p>
    </div>
</template>
<script setup lang="ts">
import { useHumanStore } from "@/stores/human"; 
import type Human from '@/composables/types/human'; 
// type is now required for latest version of Nuxt
// Reference: https://stackoverflow.com/questions/75789484/the-requested-module-nuxt-models-component-blog-blogpage-interface-ts-does-n

useSeoMeta({
    title: "Store Page",
});

const useHuman = useHumanStore();
const currentHuman: Human = ref(useHuman.human);

const inputHuman: Human = reactive({
    id: 0,
    name: "",
});
</script>

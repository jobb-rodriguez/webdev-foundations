<template>
    <div>
        <h2>Private Page</h2>
        <hr />
        <p>Visit a specific page you want</p>
        <label for="title">Title</label> &nbsp;
        <input type="text" name="title" id="title" v-model="inputTitle" />
        <br />
        <NuxtLink
            :to="{ name: 'private-title', params: { title: inputTitle } }"
        >
            <button>Visit {{ inputTitle }} Page</button>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "private",
});
useSeoMeta({
    title: "Private Page",
});

const inputTitle: Ref<string> = ref("Default");
</script>

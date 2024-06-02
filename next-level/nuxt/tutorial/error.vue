<template>
    <div>
        <h2>Oops, the page you're looking for doesn't exist</h2>
        <p><NuxtLink :to="{ name: 'index' }">Let's take you home</NuxtLink></p>
        <hr />
        <p>
            <NuxtLink
                to="https://nuxt.com/docs/getting-started/error-handling"
                target="_blank"
                >Read more about Error Handling here</NuxtLink
            >
        </p>
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title: "Page does not exist",
});
</script>

<template>
    <div>
        <h2>Env Page</h2>
        <p>Sample Env: {{ sampleEnv }}</p>
        <hr />
        <h3>References</h3>
        <p>
            <a
                href="https://nuxt.com/docs/guide/directory-structure/env"
                target="_blank"
                >.env</a
            >
        </p>
        <p>
            <a
                href="https://nuxt.com/docs/guide/going-further/runtime-config"
                target="_blank"
                >Runtime Config</a
            >
        </p>
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title: "Env Page",
});

const config = useRuntimeConfig();

const sampleEnv: string = config.public.sampleEnv;
</script>

<template>
    <nav>
        <ul>
            <template v-for="(route, index) in navRoutesMenu" :key="index">
                <li>
                    <NuxtLink :to="route.to">{{ route.label }}</NuxtLink>
                </li>
            </template>
        </ul>
    </nav>
</template>
<script setup lang="ts">
const navRoutesMenu = [
    {
        to: { name: "index" },
        label: "Home",
    },
    {
        to: { name: "private" },
        label: "Private",
    },
    {
        to: { name: "env" },
        label: "Env",
    },
    {
        to: { name: "store" },
        label: "Store",
    },
];
</script>

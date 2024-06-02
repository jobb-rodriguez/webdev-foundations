<template>
    <div>
        <h2>You're in Private ({{ currentTitle }}) page</h2>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "private",
});

const router = useRouter();

const currentTitle = router.currentRoute._value.params.title;

useSeoMeta({
    title: `Private Page (${currentTitle})`,
});
</script>

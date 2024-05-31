<template>
  <div>
    <h1>This is a binding page</h1>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      <p>Only you can change the world</p>
    </div>
    <div :class="classObject">
      <p>Sleeping whole day is satisfying</p>
    </div>
    <div :class="[activeClass, successClass]">
      <blockquote>
        A far off memory like a scattered dream. A scattered dream like a far off memory. I want to
        line the blockquoteieces up, yours and mine.
      </blockquote>
    </div>
    <div :style="{ color: activeColor, fontSize: `${fontSize}px` }">
      <blockquote>Looks like my summer vacation is over.</blockquote>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, Ref } from 'vue'
const isActive: Ref<boolean> = ref(true)
const hasError: Ref<boolean> = ref(true)
const error: Ref<any> = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value === 'fatal'
}))

// Binding to Arrays
const activeClass: Ref<string> = ref('active')
const successClass: Ref<string> = ref('text-success')

// Styles
const activeColor: Ref<string> = ref('hsla(160, 100%, 37%, 1)')
const fontSize: Ref<number> = ref(30)
</script>
<style scoped>
.static {
  font-weight: bold;
}
.active {
  text-decoration: underline;
}
.text-danger {
  color: red;
}
.text-success {
  color: hsla(160, 100%, 37%, 1);
}
</style>

<template>
  <div>
    <h1>This is the reactivity page</h1>
    <!-- You do not need to use .value when accessing in side template -->
    <p>Counter: {{ counter }}</p>
    <p><button @click="counter++">Add 1</button> <button @click="incrementByTwo">Add 2</button></p>
    <hr />
    <p>{{ johnKrasinski.firstName }} {{ johnKrasinski.lastName }}</p>
    <button @click="updateJohnKransinski">Show the real John Kransinski</button>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue'
// REF SECTION
// When you use a ref in a template, and change the ref's value later, Vue automatically detects the change and updates the DOM accordingly.
const counter: Ref<number> = ref(0)
// Use .value when accessing inside script
counter.value++

function incrementByTwo(): void {
  counter.value += 2
}

// REACTIVE SECTION
import { reactive } from 'vue'
// reactive() makes an object itself reactive
interface Person {
  firstName: string
  lastName: string
}

const johnKrasinski: Person = reactive({ firstName: 'John', lastName: 'Krasinski' })
function updateJohnKransinski(): void {
  johnKrasinski.firstName = 'Randall'
  johnKrasinski.lastName = 'Park'
}
</script>

<template>
  <div>
    <h1>This is the computed page</h1>
    <div>
      <p>
        Does {{ author.name }} has published books? {{ hasPublishedBooks }} ({{
          author.books.length
        }})
      </p>
      <button @click="removeBooks">Remove all published books</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed, Reactive } from 'vue'
interface Author {
  name: string,
  books: Array<string>
}
const author: Reactive<Author> = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})

const hasPublishedBooks = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

function removeBooks(): void {
  author.books = []
}

/* BEST PRACTICE
1. Getters should be side-effect free
2. Avoid mutating computed value
*/
</script>

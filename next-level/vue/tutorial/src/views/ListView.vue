<template>
  <div>
    <h1>This is the list view page</h1>
  </div>
  <div>
    <h2>Welcome to our shop!</h2>
    <p>Below are the Books for Sale:</p>
    <li v-for="(book, index) in booksForSale" :key="index">{{ book }}</li>
    <hr />
    <p>Below is the detailed version:</p>
    <template v-for="(book, index) in booksForSaleDetailed" :key="index">
      <li>
        <em>{{ book.title }}</em
        >: {{ book.author }}
      </li>
    </template>
    <hr />
    <p>Let's count upto 10, shall we?</p>
    <span v-for="(num, index) in 10" :key="index">{{ num }}<span v-if="num < 10">... </span></span>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref, reactive, Reactive } from 'vue'
const booksForSale: Ref<Array<string>> = ref([
  'Harry Potter',
  'Lord of the Rings',
  'One Piece',
  'Revised Penal Code'
])

interface Book {
  title: string
  author: string
}

const booksForSaleDetailed: Reactive<Array<Book>> = reactive([
  { title: 'Harry Potter', author: 'J.K. Rowling' },
  { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
  { title: 'One Piece', author: 'Eichiro Oda' },
  { title: 'Revised Penal Code', author: 'Former Judge Anacleto Diaz and co.' }
])
</script>

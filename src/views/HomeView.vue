<script setup>
import { RouterLink } from 'vue-router'
import CustomerList from '@/components/CustomerList.vue'
import SearchInput from '@/components/SearchInput.vue'
</script>

<template>
  <div class="max-w-5xl min-h-screen mx-auto px-4 sm:px-6 py-10">
    <div class="sm:flex sm:items-center sm:justify-between">
      <h1 class="text-xl font-bold mb-4 sm:mb-0">Sycamore Customer Dashboard</h1>

      <RouterLink
        to="/add-customer"
        class="flex bg-purple-500 font-medium items-center text-white transition px-4 py-2 rounded hover:bg-purple-600 max-w-fit"
        >Add new customer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 inline-block ml-2 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
          />
        </svg>
      </RouterLink>
    </div>

    <SearchInput />

    <CustomerList />
  </div>
</template>

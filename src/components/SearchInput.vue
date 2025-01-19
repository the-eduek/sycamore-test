<script setup>
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '@/stores/customer'

const { searchTerm } = storeToRefs(useCustomerStore())
</script>

<template>
  <div class="md:w-1/2 lg:w-1/3 my-10">
    <div class="relative">
      <input
        id="search"
        placeholder="Search all customers"
        class="border h-full pl-3 pr-12 py-2 rounded text-sm w-full"
        title="Search"
        type="text"
        v-model="searchTerm"
      />

      <label
        class="absolute border-l inline-flex h-full items-center right-0 px-2 rounded-r top-0"
        for="search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

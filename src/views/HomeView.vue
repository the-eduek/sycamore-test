<script setup>
import CustomerList from '@/components/CustomerList.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex-col  ">
      <h1 class="text-xl font-bold mb-4">Customer Dashboard</h1>

      <RouterLink
        to="/add-customer"
        class="bg-purple-500 font-medium text-white transition px-4 py-2 rounded hover:bg-purple-600"
        >Add new customer</RouterLink
      >
    </div>


    <CustomerList />
  </div>
</template>

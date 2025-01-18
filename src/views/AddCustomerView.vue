<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CustomerForm from '@/components/CustomerForm.vue'

const { query } = useRoute()

const editID = ref()

watch(
  () => query.edit,
  () => {
    query.edit ? (editID.value = Number(query.edit)) : (editID.value = null)
  },
  { immediate: true },
)
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="my-4"></div>
    
    <h1 class="text-xl font-bold mb-4">Add Customer</h1>

    <CustomerForm :editID="editID" />
  </div>
</template>

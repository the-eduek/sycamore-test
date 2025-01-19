<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CustomerForm from '@/components/CustomerForm.vue'

// go back button
const router = useRouter()

function goBack() {
  router.go(-1)
}

function closeForm() {
  router.push('/')
}

// get edit status from route
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
  <div class="max-w-5xl min-h-screen mx-auto px-4 py-10">
    <div class="flex items-center">
      <button @click="goBack" title="Back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </div>

    <h1 class="text-xl font-bold my-4 md:my-8">{{ editID ? 'Edit' : 'Add' }} Customer</h1>

    <CustomerForm :editID="editID" @submit="closeForm" />
  </div>
</template>

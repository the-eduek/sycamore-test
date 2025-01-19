<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useCustomerStore } from '@/stores/customer'

const { customers } = storeToRefs(useCustomerStore())

const { deleteCustomer } = useCustomerStore()

const router = useRouter()

function redirectEditCustomer(id) {
  router.push({ path: '/add-customer', query: { edit: id } })
}
</script>

<template>
  <div class="my-12">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-100 border-b font-medium text-gray-700 text-sm">
            <th class="px-4 py-2 text-left">First Name</th>
            <th class="px-4 py-2 text-left">Last Name</th>
            <th class="px-4 py-2 text-left">Email</th>
            <th class="px-4 py-2 text-left">Phone</th>
            <th class="px-4 py-2 text-left">State</th>
            <th class="px-4 py-2">Status</th>
            <th class="w-0"></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(customer, index) in customers"
            :key="customer.id"
            :class="['border-b', { 'bg-white': index % 2 === 0, 'bg-purple-50': index % 2 !== 0 }]"
          >
            <td class="capitalize px-4 py-3 text-sm text-gray-700">{{ customer.firstName }}</td>
            <td class="capitalize px-4 py-3 text-sm text-gray-700">{{ customer.lastName }}</td>
            <td class="px-4 py-3 text-sm text-gray-700">{{ customer.email }}</td>
            <td class="px-4 py-3 text-sm text-gray-700">{{ customer.phone }}</td>
            <td class="px-4 py-3 text-sm text-gray-700">{{ customer.state }}</td>
            <td class="px-4 py-3 text-center text-sm">
              <span
                class="px-2 py-1 text-xs font-medium rounded"
                :class="{
                  'bg-green-100 text-green-800': customer.active,
                  'bg-red-100 text-red-800': !customer.active,
                }"
              >
                {{ customer.active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="flex p-4 text-center text-sm max-w-fit">
              <button
                @click="redirectEditCustomer(customer.id)"
                class="text-blue-500 hover:text-blue-700 mr-2"
                title="Edit customer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
              <button
                @click="deleteCustomer(customer.id)"
                class="text-red-500 hover:text-red-700 ml-2"
                title="Delete customer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </td>
          </tr>

          <tr v-if="!customers.length">
            <td colspan="7" class="px-4 py-6 text-center text-gray-500 text-sm">
              No customers yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

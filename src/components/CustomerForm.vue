<script setup>
import { onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '@/stores/customer'
import states from '@/assets/states.json'

const CUSTOMER = {
  FIRSTNAME: 'First Name',
  LASTNAME: 'Last Name',
  EMAIL: 'Email',
  PHONE: 'Phone',
  STATE: 'State',
  ACTIVE: 'Active Customer',
  DETAILS: 'Details',
}

const { customers } = storeToRefs(useCustomerStore())

const { addCustomer } = useCustomerStore()

const props = defineProps({
  editID: {
    type: Number,
    default: null,
  },
})

const customerObj = ref({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  state: '',
  active: false,
  details: '',
})

function addCustomerDetails() {
  if (props.editID) {
    const customerIndex = customers.value.findIndex((customer) => customer.id === props.editID)
    customers.value[customerIndex] = { ...customerObj.value }
    return
  }

  const noOfCustomers = customers.value.length
  customerObj.value.id = noOfCustomers + 1

  addCustomer(customerObj.value)
}

onBeforeMount(() => {
  const customer = customers.value.find((customer) => customer.id === props.editID)
  if (customer) {
    customerObj.value = { ...customer }
  }
})
</script>

<template>
  <div class="py-4">
    <form @submit.prevent="addCustomerDetails" class="space-y-8">
      <div>
        <label :for="CUSTOMER.FIRSTNAME" class="block text-sm font-medium">{{
          CUSTOMER.FIRSTNAME
        }}</label>

        <input
          :id="CUSTOMER.FIRSTNAME"
          placeholder="Enter customer first name"
          :class="[{ 'border-red-500': error }, 'w-full mt-1 px-3 py-2 border rounded text-sm']"
          type="text"
          v-model="customerObj.firstName"
        />
      </div>

      <div>
        <label :for="CUSTOMER.LASTNAME" class="block text-sm font-medium">{{
          CUSTOMER.LASTNAME
        }}</label>

        <input
          :id="CUSTOMER.LASTNAME"
          placeholder="Enter customer last name"
          :class="[{ 'border-red-500': error }, 'w-full mt-1 px-3 py-2 border rounded text-sm']"
          type="text"
          v-model="customerObj.lastName"
        />
      </div>

      <div>
        <label :for="CUSTOMER.EMAIL" class="block text-sm font-medium">{{ CUSTOMER.EMAIL }}</label>

        <input
          :id="CUSTOMER.EMAIL"
          placeholder="Enter customer email"
          :class="[{ 'border-red-500': error }, 'w-full mt-1 px-3 py-2 border rounded text-sm']"
          type="text"
          v-model="customerObj.email"
        />
      </div>

      <div>
        <label :for="CUSTOMER.PHONE" class="block text-sm font-medium">{{ CUSTOMER.PHONE }}</label>

        <input
          :id="CUSTOMER.PHONE"
          placeholder="Enter customer phone"
          :class="[{ 'border-red-500': error }, 'w-full mt-1 px-3 py-2 border rounded text-sm']"
          type="text"
          v-model="customerObj.phone"
        />
      </div>

      <div>
        <label :for="CUSTOMER.STATE" class="block text-sm font-medium">{{ CUSTOMER.STATE }}</label>

        <select
          :name="CUSTOMER.STATE"
          :id="CUSTOMER.STATE"
          :class="[{ 'border-red-500': error }, 'w-full mt-1 px-3 py-2 border rounded text-sm']"
          v-model="customerObj.state"
        >
          <option v-for="(state, index) in [...states]" :key="index" :value="state">
            {{ state }}
          </option>
        </select>
      </div>

      <div>
        <label :for="CUSTOMER.DETAILS" class="block text-sm font-medium">{{
          CUSTOMER.DETAILS
        }}</label>

        <textarea
          :id="CUSTOMER.DETAILS"
          v-model="customerObj.details"
          class="w-full mt-1 px-3 py-2 border rounded h-32 text-sm"
          placeholder="Enter customer details"
        ></textarea>
      </div>

      <div class="flex items-center">
        <input type="checkbox" :id="CUSTOMER.ACTIVE" v-model="customerObj.active" class="mr-1.5" />
        <label :for="CUSTOMER.ACTIVE" class="text-sm font-medium">Active customer</label>
      </div>

      <div class="flex items-center">
        <button
          type="submit"
          class="bg-blue-500 font-medium text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {{ props.editID ? 'Edit' : 'Add' }} Customer
        </button>
      </div>
    </form>
  </div>
</template>

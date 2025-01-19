<script setup>
import { onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '@/stores/customer'
import { CUSTOMER } from '@/constants'
import states from '@/assets/states.json'
import vValidateFormInput from '@/functions/validateFormInput'

// store
const { customers } = storeToRefs(useCustomerStore())
const { addCustomer } = useCustomerStore()

// props
const props = defineProps({
  editID: {
    type: Number,
    default: null,
  },
})

// emit submit event
const emits = defineEmits(['submit'])

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

// submit form handler
function validateForm() {
  const inputFields = document.querySelectorAll('[data-validate]')
  let allValid = true

  inputFields.forEach((inputField) => {
    if (!inputField._isValid) {
      allValid = false
      inputField._showErrorMessage()
    }
  })

  return allValid
}

function handleSubmit() {
  if (!validateForm()) return

  if (props.editID) {
    const customerIndex = customers.value.findIndex((customer) => customer.id === props.editID)
    if (customerIndex !== -1) customers.value[customerIndex] = { ...customerObj.value }
  } else {
    customerObj.value.id = customers.value.length + 1
    addCustomer(customerObj.value)
  }

  emits('submit')
}

// load existing data for edit
onBeforeMount(() => {
  const customer = customers.value.find((customer) => customer.id === props.editID)
  if (customer) {
    customerObj.value = { ...customer }
  }
})
</script>

<template>
  <div class="py-4">
    <form @submit.prevent="handleSubmit">
      <div class="md:flex space-y-8 md:space-y-0 mb-8 md:mb-12">
        <div class="md:w-1/2 md:mr-4 relative">
          <label :for="CUSTOMER.FIRSTNAME" class="block text-sm font-medium">First Name</label>

          <input
            :id="CUSTOMER.FIRSTNAME"
            placeholder="Enter customer first name"
            class="w-full mt-1 px-3 py-2 border rounded text-sm"
            type="text"
            v-model="customerObj.firstName"
            v-validate-form-input="CUSTOMER.FIRSTNAME"
            data-validate="true"
          />
        </div>

        <div class="md:w-1/2 md:ml-4">
          <label :for="CUSTOMER.LASTNAME" class="block text-sm font-medium">Last Name</label>

          <input
            :id="CUSTOMER.LASTNAME"
            placeholder="Enter customer last name"
            class="w-full mt-1 px-3 py-2 border rounded text-sm"
            type="text"
            v-model="customerObj.lastName"
            v-validate-form-input="CUSTOMER.LASTNAME"
            data-validate="true"
          />
        </div>
      </div>

      <div class="md:flex space-y-8 md:space-y-0 mb-8 md:mb-12">
        <div class="md:w-1/2 md:mr-4">
          <label :for="CUSTOMER.EMAIL" class="block text-sm font-medium">Email</label>

          <input
            :id="CUSTOMER.EMAIL"
            placeholder="Enter customer email"
            class="w-full mt-1 px-3 py-2 border rounded text-sm"
            type="text"
            v-model="customerObj.email"
            v-validate-form-input="CUSTOMER.EMAIL"
            data-validate="true"
          />
        </div>

        <div class="md:w-1/2 md:ml-4">
          <label :for="CUSTOMER.PHONE" class="block text-sm font-medium">Phone Number</label>

          <input
            :id="CUSTOMER.PHONE"
            placeholder="Enter customer phone number"
            class="w-full mt-1 px-3 py-2 border rounded text-sm"
            type="text"
            v-model="customerObj.phone"
            v-validate-form-input="CUSTOMER.PHONE"
            data-validate="true"
          />
        </div>
      </div>

      <div class="md:flex">
        <div class="md:w-1/2 md:ml-4 md:order-2">
          <div>
            <label :for="CUSTOMER.STATE" class="block text-sm font-medium">State (Nigeria)</label>

            <select
              :name="CUSTOMER.STATE"
              :id="CUSTOMER.STATE"
              class="background-none bg-white h-full w-full mt-1 px-3 py-2.5 border rounded text-sm"
              v-model="customerObj.state"
              v-validate-form-input="CUSTOMER.STATE"
              data-validate="true"
            >
              <option value="" disabled>Select customer state</option>
              <option v-for="(state, index) in [...states]" :key="index" :value="state">
                {{ state }}
              </option>
            </select>
          </div>

          <div class="flex items-center mb-8 mt-10">
            <input
              type="checkbox"
              :id="CUSTOMER.STATUS"
              v-model="customerObj.active"
              class="mr-1.5"
            />
            <label :for="CUSTOMER.STATUS" class="text-sm font-medium">Set as active customer</label>
          </div>
        </div>

        <div class="md:w-1/2 md:mr-4">
          <label :for="CUSTOMER.DETAILS" class="block text-sm font-medium"
            >Customer's Details</label
          >

          <textarea
            :id="CUSTOMER.DETAILS"
            v-model="customerObj.details"
            v-validate-form-input="CUSTOMER.DETAILS"
            class="w-full mt-1 px-3 py-2 border rounded h-32 text-sm"
            placeholder="Enter customer details"
            data-validate="true"
          ></textarea>
        </div>
      </div>

      <div class="flex justify-center my-8 md:my-16">
        <button
          type="submit"
          class="bg-purple-500 font-medium text-white px-4 py-3 rounded hover:bg-purple-600 w-full md:w-1/2"
        >
          {{ props.editID ? 'Save edits' : 'Add customer' }}
        </button>
      </div>
    </form>
  </div>
</template>

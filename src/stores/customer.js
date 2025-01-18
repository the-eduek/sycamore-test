import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      state: 'Lagos',
      active: true,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '0987654321',
      state: 'Abia',
      active: false,
    },
    {
      id: 3,
      firstName: 'Rloo',
      lastName: 'Tooph',
      email: 'rloo.tooph@example.com',
      phone: '0987654321',
      state: 'Delta',
      active: false,
    },
    {
      id: 4,
      firstName: 'Ed',
      lastName: 'Schitt',
      email: 'ed.schitt@example.com',
      phone: '0987654321',
      state: 'Taraba',
      active: true,
    },
    {
      id: 4,
      firstName: 'Reed',
      lastName: 'OiPoi',
      email: 'reed.Ooipoi@example.com',
      phone: '0987654321',
      state: 'Ogun',
      active: false,
    },
  ])

  const customerPlaceholder = ref({})

  function addCustomer(newCustomer) {
    customers.value.push(newCustomer)
  }

  function deleteCustomer(customerID) {
    customers.value = customers.value.filter((customer) => customerID !== customer.id)
  }

  function editCustomer(customerID) {
    customerPlaceholder.value = customers.value.filter((customer) => customerID === customer.id)[0]
  }

  return { customers, addCustomer, deleteCustomer, editCustomer }
})

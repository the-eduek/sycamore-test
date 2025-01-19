import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '08012233344',
      state: 'Lagos',
      active: true,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '07044445555',
      state: 'Abia',
      active: false,
    },
    {
      id: 3,
      firstName: 'Rloo',
      lastName: 'Tooph',
      email: 'rloo.tooph@example.com',
      phone: '08077777778',
      state: 'Delta',
      active: false,
    },
    {
      id: 4,
      firstName: 'Ed',
      lastName: 'Schitt',
      email: 'ed.schitt@example.com',
      phone: '09099999999',
      state: 'Taraba',
      active: true,
    },
  ])

  function addCustomer(newCustomer) {
    customers.value.push(newCustomer)
  }

  function deleteCustomer(customerID) {
    customers.value = customers.value.filter((customer) => customerID !== customer.id)
  }

  const searchTerm = ref('')

  const filteredCustomers = computed(() =>
    customers.value.filter((customer) => {
      searchTerm.value = searchTerm.value.trim().toLowerCase()

      let customerStatus = ''
      if (customer.active) customerStatus = 'active'
      else customerStatus = 'inactive'

      return (
        customer.firstName.toLowerCase().includes(searchTerm.value) ||
        customer.lastName.toLowerCase().includes(searchTerm.value) ||
        customer.email.toLowerCase().includes(searchTerm.value) ||
        customer.phone.toLowerCase().includes(searchTerm.value) ||
        customer.state.toLowerCase().includes(searchTerm.value) ||
        customerStatus.startsWith(searchTerm.value)
      )
    }),
  )

  return { customers, addCustomer, deleteCustomer, searchTerm, filteredCustomers }
})

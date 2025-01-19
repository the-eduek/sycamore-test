import { CUSTOMER, EMAIL_REGEX, NGN_PHONE_REGEX } from '@/constants'

function validateField(field, value) {
  switch (field) {
    case CUSTOMER.FIRSTNAME:
      if (!value.trim()) return "Please enter customer's first name."
      break
    case CUSTOMER.LASTNAME:
      if (!value.trim()) return "Please enter customer's last name."
      break
    case CUSTOMER.EMAIL:
      if (!value.trim()) return "Please enter customer's email."
      if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email.'
      break
    case CUSTOMER.PHONE:
      if (!value.trim()) return "Please enter customer's phone number."
      if (!NGN_PHONE_REGEX.test(value)) return 'Please enter a valid phone number.'
      break
    case CUSTOMER.STATE:
      if (!value) return "Please select customer's state."
      break
    case CUSTOMER.DETAILS:
      if (!value.trim()) return "Please enter customer's details."
      break
    default:
      return null
  }

  return null
}

export default {
  mounted(el, binding) {
    const fieldName = binding.value

    const errorElement = document.createElement('p')
    errorElement.className = 'absolute bottom mt-px text-xs text-red-500'
    el.parentNode.appendChild(errorElement)

    function showErrorMessage() {
      const errorMessage = validateField(fieldName, el.value)
      if (errorMessage) {
        errorElement.textContent = errorMessage
        el._isValid = false
      } else {
        errorElement.textContent = null
        el._isValid = true
      }
    }

    el._isValid = false

    el.addEventListener('input', showErrorMessage)

    el._showErrorMessage = showErrorMessage
  },

  beforeUnmount(el) {
    el.removeEventListener('input', el._showErrorMessage)

    delete el._showErrorMessage
    delete el._isValid
  },
}

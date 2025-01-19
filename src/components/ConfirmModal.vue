<script setup>
const emits = defineEmits(['close', 'delete'])
</script>

<template>
  <div class="backdrop-blur-[2px] bg-neutral-700/80 fixed flex h-full left-0 top-0 w-full z-20">
    <div class="flex h-full items-center justify-center w-full">
      <div class="bg-white m-auto px-6 py-10 relative rounded">
        <p class="font-medium text-center mb-6 md:text-lg">Confirm delete?</p>

        <div class="flex items-center justify-between px-10">
          <button
            class="border border-neutral-400 font-medium mr-2 px-6 md:px-10 py-2 md:py-3 outline-none focus:outline-neutral-400 hover:outline-neutral-400 rounded-full text-sm md:text-base text-red-500 transition"
            title="Delete Customer"
            type="button"
            @click="
              () => {
                emits('delete')
              }
            "
          >
            Delete
          </button>

          <button
            class="bg-neutral-800 border border-neutral-300 font-medium ml-2 px-6 md:px-10 py-2 md:py-3 outline-none focus:outline-neutral-500 hover:outline-neutral-500 rounded-full text-sm md:text-base text-neutral-50 transition"
            title="Cancel"
            type="button"
            @click="
              () => {
                emits('close')
              }
            "
          >
            Cancel
          </button>
        </div>

        <div className="absolute right-0 top-0">
          <button
            className="p-4"
            title="Close"
            type="button"
            @click="
              () => {
                emits('close')
              }
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

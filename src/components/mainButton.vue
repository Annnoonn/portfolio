<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
<template>
  <button
    class="flex bg-secondary items-center color-BTSblue border-6 h-100px hover:bg-BTSblue hover:color-BTSskin px-4 py-2 transition-all text-2xl border-none ml-15 font-baloo w-536px mb-10 cursor-pointer"
  >
    {{ label }}
  </button>
</template>

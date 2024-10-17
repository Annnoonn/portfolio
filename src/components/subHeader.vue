<script setup lang="ts">
defineProps<{
  headerTitle: string
}>()
</script>
<template>
  <div class="flex bg-BTSblue p-3">
    <RouterLink to="/">
      <div class="bg-BTSblue w-full">
        <img
          class="m-5 w-15 hover:opacity-50 transition-200"
          src="../assets/backwardarrow.png"
        /></div
    ></RouterLink>
    <h1 class="mx-auto font-khand text-50px tracking-wide bg-BTSblue m-0 color-BTSskin">
      {{ headerTitle }}
    </h1>
  </div>
</template>

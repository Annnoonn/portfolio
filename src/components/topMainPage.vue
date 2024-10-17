<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Crée un ref local qui pointe vers l'élément DOM
const sectionRef = ref<HTMLElement | null>(null)

// Utiliser onMounted pour vérifier que le DOM est monté
onMounted(() => {
  if (sectionRef.value) {
    console.log('...')
  } else {
    console.error('sectionRef is still null after mounting!')
  }
})

// Expose ce ref au composant parent
defineExpose({ sectionRef })
</script>

<template>
  <div ref="sectionRef" class="bg-BTSskin h-screen w-screen">
    <!-- Barre bleue fixe -->
    <div class="ml-[10vw] bg-BTSblue w-[0.5vw] h-screen absolute ml-[0vw]"></div>

    <!-- Conteneur pour BTS et SIO -->

    <!-- Autre conteneur -->
    <div class="relative w-[350px] h-[650px] top-[17vh] left-[60vw] z-[10]">
      <div class="absolute right-50">
        <!-- Texte BTS avec conteneur adapté -->
        <div class="font-jomhuria text-outline text-BTSskin text-[250px] relative top-23 right-15">
          BTS
        </div>

        <!-- Conteneur pour SIO -->
        <div class="bg-white w-[600px] h-[400px] relative z--100">
          <h1
            class="absolute transform bottom-6 font-jomhuria ml-[1vw] text-outline text-white text-[250px] tracking-wide"
          >
            SIO
          </h1>
        </div>
      </div>
      <!-- Texte PORTFOLIO avec rotation -->
      <div class="absolute top-20 left-60 rotate-90">
        <div
          class="flex text-[250px] text-BTSblue font-jomhuria font-baloo leading-none user-select-none"
        >
          PORTFOLIO
          <div class="rounded-full bg-BTSblue w-10 h-10 self-center mt-4 ml-2"></div>
        </div>
      </div>
      <img class="z-10 w-110" src="../assets/20240407_213424.jpg" />
      <div class="absolute flex top--12 left--12 z-20">
        <div class="relative h-[60px] w-[60px] bg-BTSblue rounded-full top-4.5 left-4.5"></div>
        <div
          class="absolute h-[90px] w-[90px] bg-transparent border-dotted color-BTSblue rounded-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
// Crée un ref local qui pointe vers l'élément DOM
const sectionRef = ref<HTMLElement | null>(null)

// Expose ce ref au composant parent
defineExpose({ sectionRef })
</script>
<template>
  <div ref="sectionRef" class="bg-BTSskin flex justify-start w-screen h-screen">
    <div class="bg-BTSblue flex flex-col justify-between w-[0.5vw] h-screen ml-[10vw]">
      <div class="font-jomhuria text-[50px] text-BTSblue ml-15 mt-3">2023</div>
      <div class="mb-50">
        <div class="relative mb-40">
          <div class="text-BTSblue font-jomhuria text-[140px] ml-15 absolute">PORT</div>
          <div class="text-BTSblue font-jomhuria text-[140px] ml-15 absolute top-15">FOLIO</div>
        </div>
        <div class="ml-15 w-50 flex justify-between">
          <div class="rd-full w-8 h-8 bg-BTSblue"></div>
          <div class="rd-full w-8 h-8 bg-BTSblue"></div>
          <div class="rd-full w-8 h-8 bg-BTSblue"></div>
          <div class="rd-full w-8 h-8 bg-BTSblue"></div>
        </div>
        <div class="relative mb-40">
          <div class="text-BTSblue font-jomhuria text-[140px] ml-15 absolute">BTS</div>
          <div class="text-BTSblue font-jomhuria text-[140px] ml-15 absolute top-15">SIO</div>
        </div>
      </div>
      <div class="font-jomhuria text-[50px] text-BTSblue ml-15">2025</div>
    </div>
    <div class="flex flex-col w-40% ml-150 h-screen bg-white justify-evenly">
      <div class="flex flex-col items-center">
        <h1 class="font-jomhuria text-BTSblue text-[60px] m-0">RÉALISATIONS EN COURS</h1>

        <RouterLink class="text-inherit decoration-none" to="/architectureReseau">
          <div
            class="text-center decoration-none hover:scale-[1.3] hover:bg-BTSblue hover:color-BTSskin p-5 hover:left-100 hover:cursor-pointer transition-200"
          >
            <h2 class="font-khand text-[30px]">Architecture réseau</h2>
            <span class="font-khand text-[20px]"
              >Utilisation de CISCO PACKET TRACER pour comprendre et avoir une vue concrète des flux
              de données et des différents points d'entrées dans un réseau complexe</span
            >
          </div>
        </RouterLink>
        <RouterLink class="text-inherit decoration-none" to="/developpementweb">
          <div
            class="text-center hover:scale-[1.3] hover:bg-BTSblue hover:color-BTSskin p-5 hover:left-100 hover:cursor-pointer transition-200"
          >
            <h2 class="font-khand text-[30px] text-center">Développement web</h2>
            <span class="font-khand text-[20px]"
              >Introduction à l'utilisation du développement web vanilla (HTML, CSS, Javascript)
              approfondie en autonomie en VueJS (Site développé intégralement par mes soins)
            </span>
          </div>
        </RouterLink>
      </div>

      <div class="flex flex-col items-center">
        <h1 class="font-jomhuria text-BTSblue text-[60px] m-0 mt-10">
          RÉALISAITONS PROFESSIONNELLES
        </h1>
        <div
          class="flex flex-col items-center hover:scale-[1.3] hover:bg-BTSblue hover:color-BTSskin p-5 hover:left-100 hover:cursor-pointer transition-200"
        >
          <h2 class="font-khand text-[30px]">Support et service client</h2>
          <span class="font-khand text-[20px]"
            >Analyse des problèmes client et leur résolution avec prise en main sur le poste,
            analyse du logiciel, Windows, des journaux (logs) et envoi de tickets en cas de bug
            avéré nécessitant un développement
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

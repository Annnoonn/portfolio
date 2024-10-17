<script setup lang="ts">
import { ref } from 'vue'
const sectionRef = ref<HTMLElement | null>(null)
const downloadLink = ref<HTMLAnchorElement | null>(null)

// Fonction pour déclencher le téléchargement
const downloadFile = () => {
  // Si la référence du lien est définie, cliquer sur le lien pour démarrer le téléchargement
  if (downloadLink.value) {
    downloadLink.value.click()
  }
}
// Expose ce ref au composant parent
defineExpose({ sectionRef })
</script>

<template>
  <RouterView>
    <div ref="sectionRef" class="bg-BTSskin w-screen h-screen">
      <div class="bg-BTSblue w-[0.5vw] h-screen absolute ml-[10vw]"></div>
      <div class="bg-white w-[600px] h-[400px] relative top-50 left-200">
        <div
          class="text-[150px] text-BTSblue font-jomhuria leading-none absolute w-200 bottom-60 right-100 flex flex-col items-end"
        >
          <div class="h-10 mb-10 mr-25">A PROPOS</div>
          <div class="flex mb-8 mr-6">
            DE MOI
            <div class="rounded-full bg-BTSblue w-5 h-5 self-center mt-4 ml-2"></div>
          </div>
        </div>
        <div class="w-70 right-10 bottom-50 absolute font-khand font-medium text-start text-[20px]">
          Passionné par le développement informatique et les nouvelles technologies, je suis
          actuellement en BTS Services Informatiques aux Organisations (SIO).<br />Après deux ans
          d'études en Mathématiques, Informatique et Statistique (MIS), j'ai choisi de me réorienter
          vers un domaine qui me correspond davantage : l'informatique pratique et appliquée.
        </div>
        <div
          class="w-70 left-160 bottom-56.2 absolute font-khand font-medium text-start text-[20px]"
        >
          Mes compétences sont variées, allant du développement web ou à l'architecture réseau. À
          l'aise autant dans le support technique que dans la gestion de l'infrastructure réseau,
          j'aime trouver des solutions précises et efficaces. Mon objectif après le BTS est de
          m’orienter en tant que développeur ou directeur des systèmes d'information (DSI).
        </div>
        <div>
          <button
            @click="downloadFile"
            class="justify-center font-khand font-bold absolute bottom-0 border-none text-[30px] hover:scale-[1.2] transition-200 bg-BTSblue color-BTSskin hover:underline"
          >
            Télécharger mon CV
          </button>
          <a
            class="absolute bottom-0"
            ref="downloadLink"
            href="../assets/81970.png"
            download="image.pdf"
          >
          </a>
        </div>

        <div class="absolute top-50 left-100 mt-10">
          <div>
            <img class="w-100 h-70 bg-black" src="../assets/20771.png" />
            <div class="flex z-20">
              <div
                class="absolute h-[60px] w-[60px] bg-BTSblue rounded-full top-60.5 right-90.5"
              ></div>
              <div
                class="absolute h-[90px] w-[90px] bg-transparent border-dotted color-BTSblue rounded-full top-56 right-86"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouterView>
</template>

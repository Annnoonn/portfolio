<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import TopMainPage from '@/components/topMainPage.vue'
import SecondMainPage from '@/components/secondMainPage.vue'
import ThirdMainPage from '@/components/thirdMainPage.vue'
import MainHeader from '@/components/mainHeader.vue'
import forthMainPage from '@/components/forthMainPage.vue'

// Créer des refs pour chaque section
const topSectionRef = ref<InstanceType<typeof TopMainPage> | null>(null)
const secondSectionRef = ref<InstanceType<typeof SecondMainPage> | null>(null)
const thirdSectionRef = ref<InstanceType<typeof ThirdMainPage> | null>(null)
const forthSectionRef = ref<InstanceType<typeof forthMainPage> | null>(null)

onMounted(() => {
  if (topSectionRef.value) {
    console.log(
      'DOM mounted :',
      topSectionRef.value.sectionRef,
      secondSectionRef.value?.sectionRef,
      thirdSectionRef.value?.sectionRef,
      forthSectionRef.value?.sectionRef
    )
  } else {
    console.error('sectionRef is still null after mounting!')
  }
})

// Fonction pour scroller vers la section demandée
const scrollToSection = (section: string) => {
  let targetRef: HTMLElement | null = null

  // Vérifie quelle section est appelée et définit la bonne ref
  if (section === 'top' && topSectionRef.value?.sectionRef) {
    targetRef = topSectionRef.value.sectionRef // Récupérer l'élément DOM
  } else if (section === 'second' && secondSectionRef.value?.sectionRef) {
    targetRef = secondSectionRef.value.sectionRef
  } else if (section === 'third' && thirdSectionRef.value?.sectionRef) {
    targetRef = thirdSectionRef.value.sectionRef
  } else if (section === 'forth' && forthSectionRef.value?.sectionRef) {
    targetRef = forthSectionRef.value.sectionRef
  }
  // Effectue le scroll si la ref est trouvée
  if (targetRef) {
    nextTick(() => {
      targetRef!.scrollIntoView({ behavior: 'smooth' })
    })
  } else {
    console.error('Section ref is not assigned!')
  }
}
</script>

<template>
  <div class="home-page">
    <!-- Passer la fonction pour scroller vers chaque section -->
    <MainHeader @sectionSelected="scrollToSection" />
    <!-- Sections avec les refs -->
    <TopMainPage ref="topSectionRef" />
    <SecondMainPage ref="secondSectionRef" />
    <ThirdMainPage ref="thirdSectionRef" />
    <forthMainPage ref="forthSectionRef" />
  </div>
</template>

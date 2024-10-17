<script setup lang="ts">
import MainButton from './mainButton.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const emit = defineEmits(['sectionSelected'])

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const handleButtonClick = (section: string) => {
  // On ferme le menu burger
  isOpen.value = false
  emit('sectionSelected', section)
}
</script>

<template>
  <!-- Overlay flouté qui s'affiche avec transition lorsque le menu est ouvert -->
  <transition name="fade">
    <div
      v-show="isOpen"
      :class="{ blur: isOpen }"
      class="fixed transition-all duration-500 bg-gray opacity-50 top-0 left-0 h-full w-full z-50"
    ></div>
  </transition>

  <!-- Bouton burger pour ouvrir/fermer le menu -->
  <button
    @click="toggleMenu"
    :class="{ active: isOpen }"
    class="burger fixed w-13 border-none hover:opacity-50 transition-200 mt-10 ml-10 bg-transparent z-1000"
  >
    <span class="bar block w-full h-1 mb-2 bg-BTSblue transition-all duration-500 ease rd-10" />
    <span class="bar block w-full h-1 mb-2 bg-BTSblue transition-all duration-500 ease rd-10" />
    <span class="bar block w-full h-1 mb-2 bg-BTSblue transition-all duration-500 ease rd-10" />
  </button>

  <!-- Menu déroulant avec animation -->
  <transition name="dropdown">
    <div v-show="isOpen" class="fixed w-672px bg-white z-700">
      <div class="flex flex-col items-start w-35vh h-100vh pt-30">
        <MainButton label="Accueil" @click="handleButtonClick('top')" />
        <MainButton label="A propos de moi" @click="handleButtonClick('second')" />
        <MainButton label="Portfolio" @click="handleButtonClick('third')" />
        <MainButton label="Contact" @click="handleButtonClick('forth')" />
        <MainButton label="Expertise" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Transition pour l'animation du flou */
.blur {
  filter: blur(10px);
  transition: filter 1s ease;
}

/* Animation de fade-in pour l'opacité */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Transition d'animation pour le menu déroulant */
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}
.dropdown-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.dropdown-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.dropdown-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.dropdown-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Animation du bouton burger */
.burger span {
  transform-origin: left center;
}

.burger.active span:nth-child(1) {
  transform: rotate(45deg) translate(-3px, -3px);
}
.burger.active span:nth-child(2) {
  opacity: 0;
}
.burger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(0px);
}
</style>

<script setup lang="ts">
import subHeader from './subHeader.vue'
</script>
<template>
  <div class="grid-rows-[auto_2fr] grid grid-cols-[2fr_2fr] font-khand font-bold">
    <subHeader header-title="Développement Web" class="col-span-2" />
    <div class="bg-BTSskin h-screen col-span-1">
      <h2 class="text-50px m-0 text-center color-BTSblue">Ce que j'ai fait en cours</h2>
      <div class="text-justify ml-10 mt-10 mr-10 text-25px color-BTSblue">
        Développement de site web 'Vanilla'. c'est à dire, la façon classique de coder, avec 3
        fichiers principaux : un fichier HTML pour les éléments, un fichier CSS pour le style et un
        fichier Javascript pour l'interactivté.
      </div>
      <div class="flex justify-evenly mt-10">
        <img class="w-40 h-40 hover:scale-[1.3] transition-200 pointer" src="../assets/81970.png" />
        <img class="w-40 h-40 hover:scale-[1.3] transition-200" src="../assets/80930.png" />
        <img class="w-40 h-40 hover:scale-[1.3] transition-200" src="../assets/9034513.png" />
      </div>
      <div class="text-justify ml-10 mt-10 mr-10 text-25px color-BTSblue">
        Pour coder, on utilise un logiciel très connu et très pratique : Visual Studio Code. Cette
        interface permet d'ajouter des extensions, des macros, et d'avoir une vue claire de notre
        projet.
      </div>
      <img
        class="w-60% ml-40 mt-10 hover:scale-[2.3] hover:translate-y--50 hover:translate-x-70 transition-200"
        src="../assets/CEVScodeVanilla.png"
      />
    </div>

    <div class="bg-BTSblue h-screen col-span-1">
      <h2 class="text-50px m-0 text-center color-BTSskin">Ce que j'aime faire</h2>
      <div class="text-justify ml-10 mt-10 mr-10 text-25px color-BTSblue">
        Développement de site web 'Vanilla'. c'est à dire, la façon classique de coder, avec 3
        fichiers principaux : un fichier HTML pour les éléments, un fichier CSS pour le style et un
        fichier Javascript pour l'interactivté.
      </div>
      <div class="flex justify-evenly mt-10">
        <img class="w-40 h-40 hover:scale-[1.3] transition-200 pointer" src="../assets/81970.png" />
        <img class="w-40 h-40 hover:scale-[1.3] transition-200" src="../assets/80930.png" />
        <img class="w-40 h-40 hover:scale-[1.3] transition-200" src="../assets/9034513.png" />
      </div>
      <div class="text-justify ml-10 mt-10 mr-10 text-25px color-BTSblue">
        Pour coder, on utilise un logiciel très connu et très pratique : Visual Studio Code. Cette
        interface permet d'ajouter des extensions, des macros, et d'avoir une vue claire de notre
        projet.
      </div>
      <img
        class="w-60% ml-40 mt-10 hover:scale-[2.3] hover:translate-y--50 hover:translate-x-70 transition-200"
        src="../assets/CEVScodeVanilla.png"
      />
    </div>
  </div>
</template>

<style></style>

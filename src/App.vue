<script setup lang="ts">
import MainHeader from './components/mainHeader.vue'
import mainPage from './components/mainPage.vue'
import ThirdMainPage from './components/thirdMainPage.vue'
</script>

<template>
  <div id="app">
    <!-- Le contenu de la page sera injecté ici par le router -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import emailjs from 'emailjs-com'

const sectionRef = ref<HTMLElement | null>(null)

// Utiliser onMounted pour vérifier que le DOM est monté
onMounted(() => {
  if (sectionRef.value) {
    console.log(sectionRef.value)
  } else {
    console.error('sectionRef is still null after mounting!')
  }
})

// Expose ce ref au composant parent
defineExpose({ sectionRef })

// Références pour les champs du formulaire
const from_name = ref('')
const email = ref('')
const message = ref('')
const objet = ref('')

const sendEmail = async () => {
  if (from_name.value && email.value && message.value && objet.value) {
    try {
      const serviceID = 'service_z0dkx1o' // Remplace par ton ID de service EmailJS
      const templateID = 'template_4yn3e7j' // Remplace par ton ID de modèle EmailJS
      const userID = '5xVd2RCts37BW2UQ9' // Remplace par ton ID utilisateur EmailJS

      const templateParams = {
        from_name: from_name.value,
        email: email.value,
        message: message.value,
        objet: objet.value
      }
      alert('Envoi en cours...')
      await emailjs.send(serviceID, templateID, templateParams, userID)
      alert('Email envoyé avec succès !')
      ;(from_name.value = ''), (email.value = ''), (message.value = ''), (objet.value = '')
    } catch (error) {
      console.error(error) // Affiche l'erreur complète dans la console
      alert("Échec de l'envoi du mail : " + JSON.stringify(error)) // Affiche un message plus détaillé
    }
  } else {
    alert('Veuillez remplir tous les champs.')
  }
}
</script>

<template>
  <div class="bg-BTSskin flex" ref="sectionRef">
    <div class="bg-BTSblue flex flex-col justify-evenly w-[0.5vw] h-screen ml-[10vw]"></div>
    <div class="mt-30 ml-20">
      <div class="font-bold font-khand text-100px color-BTSblue">Me contacter</div>
      <form @submit.prevent="sendEmail" class="grid gap-6 w-300">
        <div class="flex justify-start w-100%">
          <div class="text-xl flex flex-col font-bold w-45%">
            <input
              type="text"
              v-model="from_name"
              placeholder="Votre nom"
              required
              class="pl-2 pb-2 pt-2 h-5 border-none w-100% hover:opacity-50 transition-200"
            />
          </div>
          <div class="flex flex-col font-bold w-45% text-xl">
            <input
              type="email"
              v-model="email"
              placeholder="Votre mail"
              required
              class="pl-2 pb-2 h-5 pt-2 ml-28 border-none w-100% hover:opacity-50 transition-200"
            />
          </div>
        </div>
        <div class="text-xl flex flex-col font-bold">
          <input
            type="text"
            v-model="objet"
            placeholder="Votre objet"
            required
            class="h-5 p-2 border-none hover:opacity-50 transition-200"
          />
        </div>
        <div class="text-xl flex flex-col font-bold">
          <textarea
            v-model="message"
            placeholder="Votre message"
            required
            class="resize-none border-none hover:opacity-50 transition-200 h-100 pl-2 pt-2 font-arial"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white hover:bg-BTSblue hover:opacity-50 transition-200 font-khand font-bold bg-BTSblue border-none w-35% h-15 text-2xl"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

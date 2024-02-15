<template>
    <div class="container">
      <Navbar />
      <chatWindow />
      <NewChatForm />
    </div>
  </template>
  
  <script>
  import NewChatForm from '@/components/NewChatForm.vue'
  import chatWindow from '@/components/chatWindow.vue'
  import Navbar from '../components/Navbar.vue'
  import getUser from '@/composables/getUser'
  import { useRouter } from 'vue-router'
  import { watch } from 'vue'
  
  export default {
    components: { Navbar, NewChatForm, chatWindow },
    setup() {
      const { user } = getUser()
      const router = useRouter()

      watch(user, () => {
        if (!user.value) {
          router.push({ name: 'welcome' })
        }
      })

    }
  }
  </script>
  
  <style>
  
  </style>
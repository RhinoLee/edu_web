<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Common/Header/Header.vue"
import Footer from "@/components/Common/Footer.vue"
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>
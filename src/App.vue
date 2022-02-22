<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from './components/Navbar.vue'
import Cards from './components/Cards.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Cards,
    Footer
  }
}
</script>

<template>
  <Navbar />
  <Cards/>
  <Footer/>
</template>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: Sans-Serif;
}

</style>

<template>
  <Navbar/>
  <!-- <Cards/> -->
  <Footer/>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import Cards from "../components/Cards.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Cards,
    Footer,
  },
  data() {
    movies: []
  },
  methods: {

  }
}

</script>